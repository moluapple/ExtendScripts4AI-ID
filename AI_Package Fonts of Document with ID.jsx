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

    var oFile, oName, fontInfo, fontName, fontFiles, index, n,
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
            } catch (e) {}
        }
    }
};

function main() {
    var doc = app.activeDocument,
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