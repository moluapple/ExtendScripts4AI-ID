//http://indisnip.wordpress.com/2010/08/17/extract-metadata-with-adobe-xmp-part-2/ functions by tomaxxi
function loadXMPLibrary() {
    if (!ExternalObject.AdobeXMPScript) {
        try {ExternalObject.AdobeXMPScript = new ExternalObject('lib:AdobeXMPScript'); }
        catch (e) {alert('Unable to load the AdobeXMPScript library!'); return false; }
    }
    return true;
}

function unloadXMPLibrary(){
    if ( ExternalObject.AdobeXMPScript ){
        try {ExternalObject.AdobeXMPScript.unload(); ExternalObject.AdobeXMPScript = undefined; }
        catch (e){alert('Unable to unload the AdobeXMPScript library!'); }
    }
}

function getUsedFonts(doc/*获取文档使用字体*/) {
	var
		arr = [],
		xmpFile, oXmp, count,
		i, path, family, face;
	loadXMPLibrary();
	xmpFile = new XMPFile(doc.fsName, XMPConst.UNKNOWN, XMPConst.OPEN_FOR_READ);
	oXmp = xmpFile.getXMP(); //Returns an XMPMeta object
	count = oXmp.countArrayItems('http://ns.adobe.com/xap/1.0/t/pg/','xmpTPg:Fonts');
	xmpFile.closeFile(XMPConst.CLOSE_UPDATE_SAFELY);
	for (i = 1; i <= count; i++){
		path = XMPUtils.composeArrayItemPath('http://ns.adobe.com/xap/1.0/t/pg/','xmpTPg:Fonts', i);
		family = oXmp.getStructField('http://ns.adobe.com/xap/1.0/t/pg/', path, XMPConst.TYPE_FONT, 'fontFamily');
		face =  oXmp.getStructField('http://ns.adobe.com/xap/1.0/t/pg/', path, XMPConst.TYPE_FONT, 'fontFace');		
		arr.push(family + '\t' + face);
	}
	unloadXMPLibrary();
	return arr;
}

function main() {
	var
		doc = File.openDialog('Select the file...', '*.ai', false),
		docPath = doc.path,
		arr = getUsedFonts (doc),
		oFolder = new Folder(docPath + '/DocumentFonts'),
		btMsg,
		PackageFonts = function (string, oFolder) {
			var arr = string.split(','), oPath, oFile, oName, i;
			for (i=0; i<arr.length; i++){
				oPath = app.fonts.itemByName(arr[i]).location;
				oFile = File(oPath); 
				oName = oFolder + '/' + arr[i].replace ('	', ' ').replace(' Regular', '') + 
					oPath.substring(oPath.lastIndexOf('.'), oPath.length); 
				oFile.copy(File(oName), true); 
			}
		};
	oFolder.create(); 
	btMsg = new BridgeTalk();
	btMsg.target = "indesign";
	btMsg.body = PackageFonts.toSource() + '("' + arr +'", "' + oFolder + '")';
	btMsg.onResult = function (resultMsg) {
		$.writeln("Result = " + resultMsg.body);
	}
	btMsg.onError = function (errorMsg) {
		$.writeln("Error = " + errorMsg.body); 
	}
	btMsg.send();
}

main();