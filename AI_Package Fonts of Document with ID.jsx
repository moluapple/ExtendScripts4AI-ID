function getUsedFonts(doc /*获取文档使用字体信息*/ ) {
    var xml = new XML(doc.XMPString),
        names = xml.descendants('stFnt:fontName'),
        files = xml.descendants('stFnt:fontFileName'),
        ln = names.length(),
        i = 0,
        arr = [];
    for (; i < ln; i++) {
        arr.push([names[i], files[i]])
    };
    return arr;
}

function packageFonts(fontInfo, oFolder) {
    /*为数组添加 indexOf 方法*/
    Array.prototype.indexOf = function (obj, start) {
        for (var i = (start || 0), j = this.length; i < j; i++) {
            if (this[i] === obj) {
                return i
            }
        }
        return -1
    }

    var oFile, oName, i = 0,
        fontInfo = fontInfo.split(','),
        fontName = fontInfo[0],
        fontFiles = fontInfo[1].split('; '),
        psNameArr = String(app.fonts.everyItem().postscriptName).split(','),
        index = psNameArr.indexOf(fontName),
        /*使用 indexOf 通过 postscript 名称找出该字体对象 */
        oPath = File(app.fonts[index].location).parent;

    for (; i < fontFiles.length; i++) {
        oFile = File(oPath + '/' + fontFiles[i]);
        oName = oFolder + '/' + fontFiles[i];
        try {
            oFile.copy(File(oName), true)
        } catch (e) {}
    }
};

function main() {
    var doc = app.activeDocument,
        arr = getUsedFonts(doc),
        oFolder = new Folder(doc.path + '/Document Fonts'),
        bt;

    oFolder.create();
    for (i = 0; i < arr.length; i++) {
        bt = new BridgeTalk();
        bt.target = "indesign";
        bt.body = packageFonts.toSource() + '("' + arr[i] + '", "' + oFolder + '")';
        bt.send();
    }
    oFolder.execute();
}

main();