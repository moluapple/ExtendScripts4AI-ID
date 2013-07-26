//http://indisnip.wordpress.com/2010/08/17/extract-metadata-with-adobe-xmp-part-2/ functions by tomaxxi

function loadXMPLibrary( /*加载XMP库*/ ) {
    if (!ExternalObject.AdobeXMPScript) try {
        ExternalObject.AdobeXMPScript = new ExternalObject("lib:AdobeXMPScript")
    } catch (a) {
        return alert("Unable to load the AdobeXMPScript library!"), !1
    }
    return !0
}

function unloadXMPLibrary( /*卸载XMP库*/) {
    if (ExternalObject.AdobeXMPScript) try {
        ExternalObject.AdobeXMPScript.unload(), ExternalObject.AdobeXMPScript = void 0
    } catch (a) {
        alert("Unable to unload the AdobeXMPScript library!")
    }
}

function getUsedFonts(doc /*获取文档使用字体信息*/ ) {
    var arr = [],
        i = 1,
        xmpFile, oXmp, count,
        path, names, files;
    loadXMPLibrary();
    xmpFile = new XMPFile(doc.fsName, XMPConst.UNKNOWN, XMPConst.OPEN_FOR_READ);
    oXmp = xmpFile.getXMP(); // Returns an XMPMeta object
    xmpFile.closeFile(XMPConst.CLOSE_UPDATE_SAFELY);
    count = oXmp.countArrayItems('http://ns.adobe.com/xap/1.0/t/pg/', 'xmpTPg:Fonts');
    for (; i <= count; i++) {
        path = XMPUtils.composeArrayItemPath('http://ns.adobe.com/xap/1.0/t/pg/', 'xmpTPg:Fonts', i);
        // 字体 postscript 名称
        names = oXmp.getStructField('http://ns.adobe.com/xap/1.0/t/pg/', path, XMPConst.TYPE_FONT, 'fontName');
        // 字体文件名（type1 字体会有两个）
        files = oXmp.getStructField('http://ns.adobe.com/xap/1.0/t/pg/', path, XMPConst.TYPE_FONT, 'fontFileName');
        arr.push([names, files]);
    }
    unloadXMPLibrary();
    return arr
}


function packageFonts(arr, oFolder) {
    /*为数组添加 indexOf 方法*/
    Array.prototype.indexOf = function (obj, start) {
        for (var i = (start || 0), j = this.length; i < j; i++) {
            if (this[i] === obj) {
                return i
            }
        }
        return -1
    }

    var oFile, oName, fontInfo, fontName, fontFiles, psNameArr, index, n,
        psNameArr = String(app.fonts.everyItem().postscriptName).split(','),
        arr = arr.split('###'),
        ln = arr.length,
        i = 0;

    for (; i < ln; i++) {
        fontInfo = arr[i].split(',');
        fontName = fontInfo[0];
        fontFiles = fontInfo[1].split('; ');
        /*使用 indexOf 通过 postscript 名称找出该字体对象 */
        index = psNameArr.indexOf(fontName);
        oPath = File(app.fonts[index].location).parent;

        for (n = 0; n < fontFiles.length; n++) {
            oFile = File(oPath + '/' + fontFiles[n]);
            oName = oFolder + '/' + fontFiles[n];
            try {
                oFile.copy(File(oName), true)
            } catch (e) {alert(e)}
        }
    }
};

function main() {
    var doc = File.openDialog('Select the file...', '*.ai', false),
        arr = getUsedFonts(doc),
        oFolder = new Folder(doc.path + '/Document Fonts'),
        bt;

    oFolder.create();
    bt = new BridgeTalk();
    bt.target = "indesign";
    bt.body = packageFonts.toSource() + '("' + arr.join('###') + '", "' + oFolder + '")';
    bt.send();
    oFolder.execute();
}

main();