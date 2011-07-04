#target illustrator
var trim = 0,
	sourceDoc = app.activeDocument,
	wh = sourceDoc.width,
	ht = sourceDoc.height,
	sourceGroup = sourceDoc.groupItems[0],
	itemWh = sourceGroup.pageItems[0].width,
	itemHt = sourceGroup.pageItems[0].height,
	repeatx = Math.floor((wh - trim * 2) / itemWh),
	repeaty = Math.floor((ht - trim * 2) / itemHt),
	itemPP = repeatx * repeaty,
	pages = Math.ceil(sourceDoc.dataSets.length / itemPP),
	offsetX = (wh - itemWh * repeatx) / 2,
	offsetY = (ht - itemHt * repeaty) / 2,
	targetDoc, dupRef, originX, originY, i, d, ab, t, k;
targetDoc = app.documents.add(DocumentColorSpace.CMYK, wh, ht, pages, DocumentArtboardLayout.GridByRow, 20.0, Math.round(Math.sqrt(pages)));
sourceDoc.activate();
for (d = 0; d < sourceDoc.dataSets.length; d++) {
	sourceDoc.dataSets[d].display();
	dupRef = sourceGroup.duplicate();
	targetLayer = d === 0 ? targetDoc.layers[0] : targetDoc.layers.add();
	dupRef.moveToEnd(targetLayer);
}
targetDoc.layers.add();
sourceDoc.close(SaveOptions.DONOTSAVECHANGES);
ab = 0;
for (i = targetDoc.layers.length - 1; i > 0; i -= itemPP) {
	originX = targetDoc.artboards[ab].artboardRect[0];
	originY = targetDoc.artboards[ab].artboardRect[1];
	k = -1;
	for (t = 0; t < itemPP; t++) {
		if ((i - t) < 1) break;
		if (t % repeatx == 0) {
			k++;
		}
		dupRef = targetDoc.layers[i - t].groupItems[0];
		dupRef.left = originX + offsetX + itemWh * (t % repeatx);
		dupRef.top = originY - offsetY - itemHt * k;
	}
	ab++;
}