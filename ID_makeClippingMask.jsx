#targetengine 'MakeClipplingMask'

var mcmTitle = '建立剪切蒙版';
// 主进程
// -----------------------------------------------
function MCM() {
	var oGroup = app.activeDocument.groups.add(app.selection),
		clippingPath = oGroup.allPageItems[0].duplicate(oGroup.itemLayer);
	clippingPath.bringToFront(oGroup);
	oGroup.allPageItems[0].remove();
	oGroup.select();
	app.cut();
	clippingPath.select();
	app.pasteInto();
}

var mcmHandlers = {
	'beforeDisplay' : function (ev) {
		ev.target.enabled = (app.documents.length > 0 && app.selection.length > 1);
	},		
	'onInvoke' : function () {
		app.doScript(MCM.toSource() + '();', ScriptLanguage.JAVASCRIPT, undefined, UndoModes.entireScript);
	}
};

// 菜单创建
// -----------------------------------------------
var mcmMenuInstaller = mcmMenuInstaller ||
	(function (mnuTitle, mnuHandlers) {
	// 1. Create the script menu action
		var mnuAction = app.scriptMenuActions.add(mnuTitle),
			editMenu = app.menus.item('$ID/Main').submenus.item('$ID/&Edit'),
			layoutMenu = app.menus[5],
			ev;
	
	// 2. Attach the event listener
		for (ev in mnuHandlers) {
			mnuAction.eventListeners.add(ev, mnuHandlers[ev]);
		}

	// 3. Create the menu item
		editMenu.menuItems.add(mnuAction, LocationOptions.after, editMenu.menuItems.itemByID(274));
		layoutMenu.menuItems.add(mnuAction, LocationOptions.after, layoutMenu.menuItems.itemByID(274));
		
		return true;
	})(mcmTitle, mcmHandlers);