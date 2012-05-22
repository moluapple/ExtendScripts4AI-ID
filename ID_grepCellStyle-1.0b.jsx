#include 'doEx.jsx'
#target indesign
#targetengine 'grepCellStyle'
(function () {
//***********此函数用于获取面板参数值
function getValue(a) {
	var b = a.items.pOption,
		c = a.items.pAction;
	return {
		regex: b.items.eGrep.text,
		where: b.items.dR.selection.text,
		style: b.items.CS.selection.text,
		to: c.items.TO.selection.text,
		clear: c.items.COR.value,
		cM: c.items.M.value,
		cRange: c.items.cRange.value,
		eRange: c.items.eRange.text,
		uM: c.items.UM.value,
		cH: c.items.cH.value,
		eH: c.items.eH.text
	}
}

//***********通用数组去重复项函数
function unique(a) {
	var b = {},
		c = [],
		d = a.length,
		e;
	for (e = 0; e < d; ++e) b[a[e]] = null;
	for (e in b) c.push(e);
	return c
}
//***********此函数用于去除查找结果行与列的列表重复项
function uniqueRowCol(arr, str) {
	return doEx(unique(arr.each(function () {
		return this.parent[str].toSpecifier()
	}).toArray())).each(function (r) { 
		return resolve(r)
	});
}

//***********主函数，所有具体操作在此进行
function doAction() {
	var V = getValue(myD),
		oSel = oDoc.selection[0],
		oStory, oTable, oColumn, oResults = [],
		eResults, where, applyTo, pBar, iteratorFunc;
	if (oSel && oSel.parent.constructor != Cell && V.where != "文档") {
		alert('请将光标直接插入单元格中');
		return
	}
	app.scriptPreferences.enableRedraw = false;
	app.findGrepPreferences.findWhat = V.regex;
	oSel && oSel.parent.constructor == Cell && (oTable = oSel.parent.parent, oStory = oSel.parentStory, oColumn = oSel.parent.parentColumn);
	where = {
		"文档": oDoc.stories.everyItem().tables.everyItem().getElements(),
		"文章": oStory && oStory.tables.everyItem().getElements(), 
		"表格": oTable && [oTable], 
		"当前列": oColumn && [oColumn]
	}[V.where];
	pBar = new ProgressBar("GREP CellStyle and more...");
	pBar.reset("正在查找并处理数据...", where.length);
	doEx(where).each(function () {
		oResults = oResults.concat(this.findGrep());
		pBar.hit()
	});
	if (!oResults.length) {alert('找不到匹配项'); return}
	eResults = doEx(oResults);
	applyTo = {
		"单元格": eResults,
		"所在行": V.to == "所在行" && uniqueRowCol(eResults, "parentRow"),
		"所在列": V.to == "所在列" && uniqueRowCol(eResults, "parentColumn"),
		"忽略": V.to == "忽略" && uniqueRowCol(eResults, "parentRow")
	}[V.to];
	pBar.reset("操作执行中, 请耐心等候...", applyTo.length);
	iteratorFunc = function (a) {
		var b;
		V.to !== "忽略" && (a.cells.everyItem().appliedCellStyle = oDoc.cellStyles.item(V.style), V.clear && a.cells.everyItem().clearCellStyleOverrides());
		b = V.eRange.split("-");
		V.cM && a.merge();
		V.cRange && a.cells[b[0] - 1].merge(a.cells[b[1] - 1]);
		V.uM && (a.rowSpan > 1 || a.columnSpan > 1) && a.unmerge();
		V.cH && a.height = V.eH;
		pBar.hit()
	};
	V.to == "单元格" ?  applyTo.each(function () {iteratorFunc(this.parent)}) 
		: applyTo.each(function () {iteratorFunc(this)});
	pBar.close();
	app.scriptPreferences.enableRedraw = true;
}

//***********利用 doScript 一步还原
function Go() {
	try {
		app.doScript(doAction, ScriptLanguage.JAVASCRIPT, undefined, 1699964501)
	} catch (a) {
		alert(a)
	}
}

//***********修改UI界面默认字体
function UIFont(a) {
	a.children && doEx(a.children).each(function () {
		try {
			this.graphics.font = ScriptUI.newFont("Tahoma", "regular", 12)
		} catch (a) {}
		UIFont(this)
	})
}

//*********** UI 构建
var oDoc = app.activeDocument,
	POS = [
	[100, 100, 380, 400], //****************************表格预留
	[0, 0, 260, 135], //*************************************面板1
	[[10, 10, 80, 30], [90, 10, 225, 50], [$.os.substring(0, 3) == "Win" ? 90 : 225, 10, 240, 50]],
	[[10, 65, 80, 85], [90, 60, 240, 80]],
	[[10, 100, 80, 120], [90, 95, 240, 115]],
	[0, 0, 260, 115], //*************************************面板2
	[[10, 15, 80, 35], [90, 10, 160, 30], [170, 15, 200, 35]],
	[[10, 50, 45, 70], [120, 50, 150, 70], [200, 50, 240, 70]],
	[[10, 80, 45, 100], [120, 80, 150, 100], [200, 80, 240, 100]]
	],
	myD = MDM({
		type: "palette",
		title: "GREP CellStyle and more...  @animalia  v1.0b",
		option: {
			closeOnKey: "OSCmnd+W",
			onShow: function () {
				if (! app.extractLabel("grep")) return
				var L = app.extractLabel("grep").split(',').reverse(),
					len = L.length, i = 0,
					records = myD.items.pOption.items.record;
					records.removeAll();
				for (; i < len; i++){
					records.add("item", L[i], 0);
				}
			},
			onClose: function () {
				app.insertLabel("grep", myD.items.pOption.items.record.items.toString());
			}
		},
		layout: [{
			name: "pOption",
			type: "panel",
			pos: POS[1],
			items: [{
				type: "statictext",
				label: "GREP表达式:",
				pos: POS[2][0]
			}, {
				name: "eGrep",
				type: "edittext",
				pos: POS[2][1],
				option: {
					text: "\\w*[市区县]",
					multiline: !0,
					helpTip: '* 表达式尽量具体切勿空泛\n  大量误匹配可能导致程序失去响应\n* 可从下拉列表中选中最近使用的表达式'
				}
			}, {
				name: "record",
				type: "dropdownlist",
				list: ["^\\W*$", "^$", "201[01]年?"],
				pos: POS[2][2],
				option: {
					selection: null,
					onChange: function () {
						this.parent.items.eGrep.text = this.selection.text
					}
				}
			}, {
				type: "statictext",
				label: "搜索范围:",
				pos: POS[3][0]
			}, {
				name: "dR",
				type: "dropdownlist",
				list: ["文档", "文章", "表格", "当前列"],
				pos: POS[3][1],
				option: {
					helpTip: '范围设置为"文档"之外的选项时\n确保将光标插入在表格内'
				}
			}, {
				type: "statictext",
				label: "单元格样式:",
				pos: POS[4][0]
			}, {
				name: "CS",
				type: "dropdownlist",
				list: oDoc.cellStyles.everyItem().name,
				pos: POS[4][1]
			}]
		}, {
			name: "pAction",
			type: "panel",
			pos: POS[5],
			items: [{
				type: "statictext",
				label: "应用样式至:",
				pos: POS[6][0]
			}, {
				name: "TO",
				type: "dropdownlist",
				list: ["单元格", "所在行", "所在列", "忽略"],
				pos: POS[6][1],
				option: {
					helpTip: '选择忽略以仅执行应用样式之外的操作',
					onChange: function () {
						var a = this.selection.index,
							b = this.parent.items.M,
							c = this.parent.items.cRange,
							d = this.parent.items.cH;
						(a == 0 || a == 2) ? (b.enabled = c.enabled = d.enabled = !1, b.value = c.value = d.value = !1) : b.enabled = c.enabled = d.enabled = !0
					}
				}
			}, {
				name: "COR",
				type: "checkbox",
				label: "清除覆盖",
				pos: POS[6][2]
			}, {
				name: "M",
				type: "checkbox",
				label: "合并所在行",
				pos: POS[7][0],
				option: {
					enabled: !1,
					onClick: function () {
						this.value && (this.parent.items.eRange.enabled = !1, this.parent.items.cRange.value = !1)
					}
				}
			}, {
				name: "cRange",
				type: "checkbox",
				label: "指定单元格",
				pos: POS[7][1],
				option: {
					enabled: !1,
					helpTip: '指定合并该行的第A到B个单元格',
					onClick: function () {
						this.value && (this.parent.items.eRange.enabled = !0, this.parent.items.M.value = !1)
					}
				}
			}, {
				name: "eRange",
				type: "edittext",
				pos: POS[7][2],
				option: {
					text: "1-2",
					enabled: !1
				}
			}, {
				name: "UM",
				type: "checkbox",
				label: "取消合并单元格",
				pos: POS[8][0]
			}, {
				name: "cH",
				type: "checkbox",
				label: "设置行高",
				pos: POS[8][1],
				option: {
					helpTip: '设置查找结果所在行的行高',
					onClick: function () {
						this.parent.items.eH.enabled = this.value
					}
				}
			}, {
				name: "eH",
				type: "edittext",
				pos: POS[8][2],
				option: {
					text: "10 mm",
					enabled: !1
				}
			}]
		}, {
			type: "group",
			items: [{
				type: "button",
				label: "取消",
				option: {
					onClick: function () {
						this.parent.parent.close(0)
					}
				}
			}, {
				type: "button",
				label: "还原",
				option: {
					onClick: function () {
						oDoc.undo()
					}
				}
			}, {
				type: "button",
				label: "运行",
				option: {
					onClick: function () {
						this.parent.parent.opacity = 0;
						var records = myD.items.pOption.items.record,
							addItem = myD.items.pOption.items.eGrep.text;
						records.items.length > 13 && records.remove(records.items[14]);
						!records.find(addItem) && records.add("item", addItem, 0);
						// ********************* main function ******************************
						Go();
						this.parent.parent.opacity = 1.0;
					}
				}
			}]
		}]
	}),
	ProgressBar = function(/*str*/title){
		 var w = new Window('palette', ' '+title, {x:0, y:0, width:340, height:60}),
			  pb = w.add('progressbar', {x:20, y:12, width:300, height:12}, 0, 100),
			  st = w.add('statictext', {x:10, y:36, width:320, height:20}, '');
		 st.justify = 'center';
		 w.center();
		 this.reset = function(msg,maxValue)
			  {
			  st.text = msg;
			  pb.value = 0;
			  pb.maxvalue = maxValue||0;
			  pb.visible = !!maxValue;
			  w.show();
			  };
		 this.hit = function() {++pb.value;};
		 this.hide = function() {w.hide();};
		 this.close = function() {w.close();};
	};
$.os.substring(0, 3) == "Win" && ScriptUI.applicationFonts.palette =="Courier New:14.0" && UIFont(myD.wD);
myD.wD.show()

})()