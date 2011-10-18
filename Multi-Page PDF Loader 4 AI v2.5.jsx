var w = new Window("dialog { text: 'PDF 打开选项', frameLocation:[400, 200], alignChildren:['fill', 'top'], filePnl: Panel { text: 'PDF 文件', orientation:'row', alignChildren:['left', 'center'], loadBtn: Button { text:'. . .', helpTip :'浏览 PDF 文件, 或将文件路径粘帖至右边文本框'}, et: EditText { text:'' , preferredSize: [220, 20]}, }, rangePnl: Panel { text: '页面', orientation:'column', alignChildren:['fill', 'top'], range: Group {allRb: RadioButton { text:'全部页面', value:true, helpTip: '部分 PDF 文件可能无法正确获取页数\\n遇此请自行输入“ 1-总页数”'}, rangeRb: RadioButton { text:'范围:', helpTip: '正确: 1-5 或 1, 2, 3 或 1, 2-4, 5, 7-8\\n允许空格, 逗号须为半角'} et: EditText { text: '', characters:25, properties:{multiline:true} }}, caGrp: Group{artboardsCb: Checkbox { text:'创建画板', preferredSize: [84, 20], helpTip: '仅适用于CS4/CS5'}, st: StaticText { text: '间距:' }, et: EditText { text:'20', characters:3}, st2: StaticText { text:'pt' }}, }, dividerLine: Panel { preferredSize: [280, 1], margins:0, }, btn: Group { orientation:'row', alignChildren:['right', 'center'], cancelBtn: Button { text:'取消', properties:{name:'cancel'}}, buildBtn: Button { text:'打开', properties:{name:'ok'} }}}");
w.rangePnl.caGrp.artboardsCb.enabled = w.rangePnl.caGrp.artboardsCb.value = app.version.split(".")[0] > 13;
w.filePnl.loadBtn.onClick = function () {
	var pdfile = File.openDialog('选择PDF文件', '*.pdf');
	pdfile && w.filePnl.et.text = pdfile.fsName;
};
w.rangePnl.range.et.onChange = function () {
	this.parent.rangeRb.value = true;
};
w.btn.buildBtn.onClick = function go() {
	var start = new Date().getTime(),
		finish, totalSeconds, minutes, seconds, pdfile = w.filePnl.et.text,
		allPage = w.rangePnl.range.allRb.value,
		pageRange = w.rangePnl.range.et.text,
		createAbs = w.rangePnl.caGrp.artboardsCb.value,
		gap = w.rangePnl.caGrp.et.text,
		psArr = [], maxArr = pageArr = null,
		targetDoc, sourceDoc, targetLayer, width, height, pageCount,
		pdfOptions = app.preferences.PDFFileOptions,
		oldInteractionPref = app.userInteractionLevel;
	w.close(0);
	app.userInteractionLevel = UserInteractionLevel.DONTDISPLAYALERTS;
	pdfOptions.pageToOpen = 1;
	app.open(new File(pdfile));
	width = activeDocument.width;
	height = activeDocument.height;
	activeDocument.close(SaveOptions.DONOTSAVECHANGES);
	if (allPage) {
		pageCount = getPDFPageCount(new File(pdfile));
		if (!pageCount) return;
		mainloop(pageCount, 0, pageCount);
	} else {
		maxArr = (function (){for (var i = 0, a = []; ++i < 101; a.push(i)); return a})();
		pageArr = pageRange.replace(/\s/g, '')
			.replace(/(\d+)-(\d+)/g, function ($1, $2, $3){return maxArr.slice($2 - 1, $3)})
			.split(',');
		mainloop(pageArr.length - 1, -1, pageArr.length);
	}
	if (createAbs) {
		var layers = activeDocument.layers;
		layers[layers.length - 1].remove();
		psArr = psArr.reverse();
		for (var k = layers.length - 1; k >= 0; k--) {
			if (layers[k].groupItems.length > 0) {
				layers[k].visible = true;
				var myGroup = layers[k].groupItems[0];
				myGroup.top = activeDocument.artboards[k].artboardRect[1] + psArr[k][0] - height;
				myGroup.left = activeDocument.artboards[k].artboardRect[0] + psArr[k][1];
				layers[k].visible = false;
			}
		}
	}
	finish = new Date().getTime();
	totalSeconds = (finish - start) / 1000;
	minutes = Math.floor(totalSeconds / 60);
	seconds = totalSeconds % 60;
	alert('操作已完成，图层为隐藏状态，按住Alt单击眼睛图标以显示\n打开 ' + activeDocument.layers.length + ' 页, 用时 ' + minutes + ' 分, ' + Math.round(seconds) + ' 秒.');
	app.userInteractionLevel = oldInteractionPref;

	function mainloop(start, end, pages) {
		if (createAbs) targetDoc = app.documents.add(DocumentColorSpace.CMYK, width, height, pages, DocumentArtboardLayout.GridByRow, gap, Math.round(Math.sqrt(pages)));
		else targetDoc = app.documents.add(DocumentColorSpace.CMYK, width, height);
		for (var i = start; i > end; i--) {
			p = pageArr ? pageArr[i] : i;
			pdfOptions.pageToOpen = p;
			sourceDoc = app.open(new File(pdfile));
			targetLayer = targetDoc.layers.add();
			targetLayer.name = "Page " + p;
			main(sourceDoc, targetLayer, psArr);
		}
	}
};
w.btn.cancelBtn.onClick = function () {
	w.close(0);
};
w.show();

function main(sourceDoc, targetLayer, psArr) {
	if (!sourceDoc.pageItems.length) {
		sourceDoc.close(SaveOptions.DONOTSAVECHANGES);
		psArr.push(null);
		return
	}
	sourceDoc.pageItems[0].selected = true;
	if (!sourceDoc.pageItems[sourceDoc.pageItems.length - 1].selected) {
		groupAll(sourceDoc);
	}
	psArr.push([sourceDoc.groupItems[0].top, sourceDoc.groupItems[0].left]);
	sourceDoc.groupItems[0].duplicate().moveToEnd(targetLayer);
	targetLayer.visible = false;
	sourceDoc.close(SaveOptions.DONOTSAVECHANGES);
}

function groupAll(doc) {
	var group = doc.layers.add().groupItems.add(),
		a, layer = doc.layers[1];
	for (a = layer.pageItems.length; a-- > 0; layer.pageItems[a].move(group, ElementPlacement.PLACEATBEGINNING));
}

// thanks to jxswm and Jezz!
function getPDFPageCount(f) {
	var gotCount = false,
		next_line, p;
	if (BridgeTalk.isInstalled('bridge') && BridgeTalk.isRunning('bridge')) {
		return getPDFCount_Br(f);
	}
	f.open('r');
	while (!gotCount) {
		next_line = f.readln();
		if (f.eof) {
			alert("抱歉，未能获取总页数");
			f.close();
			return 0
		}
		if (next_line.indexOf('/N ') > 0) {
			p = next_line.match(/\/N (\d+)\/T/)[1];
			gotCount = true;
		} else if (next_line.indexOf('/Pages>>') > 0) {
			p = next_line.match(/\/Count (\d+)\/K/)[1];
			gotCount = true;
		}
	}
	f.close();
	return Number(p);
}

//by Paul MR, http://www.ps-scripts.com/bb/viewtopic.php?f=13&t=2769&start=0#p12035
function getPDFCount_Br(file) {
	var f = new File(file),
		data, timeOutAt, currentTime, bt = new BridgeTalk();
	bt.target = "bridge";
	bt.body = 'function a(){app.document.setPresentationMode("browser","' + f.path + '");tn = new Thumbnail( File("' + f + '") ); return tn.core.itemContent.pageCount}a();';
	bt.onResult = function (inBT) {
        data = eval(inBT.body)
    };
	bt.onError = function (inBT) {
        data = '';
    };
	bt.send();
	bt.pump();
	$.sleep(100);
	timeOutAt = (new Date()).getTime() + 5000;
	currentTime = (new Date()).getTime();
	while ((currentTime < timeOutAt) && (undefined == data)) {
		bt.pump();
		$.sleep(100);
		currentTime = (new Date()).getTime();
	}
	undefined == data && data = 0;
	return data;
}