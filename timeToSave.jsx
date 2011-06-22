/***************************
 * 作为bridge启动脚本使用
 * 每15分钟弹出图片提示保存文件
 * 点击图片使弹窗关闭
 * 测试环境: AI CS5 Win7
 * ImageURL: http://cdn1.iconfinder.com/data/icons/pry_hardware/512/Time_Machine.png
***************************/

#target bridge
var time = 15; //时间设定，分钟

function saveMe (){
	/*#targetengine 'session';*/
	if (app.documents.length){
		var w, img;
		w = new Window ('palette', undefined, undefined, {borderless: true});
		img = w.add ('image', undefined, File('~/desktop/Time.png'));
		w.margins = [0,0,0,0];
		img.addEventListener('click', function (){w.close(0); w = null});
		w.show();
	}
}

function autoSave(){
	BridgeTalk.bringToFront('illustrator');
	var btMsg = new BridgeTalk();
	btMsg.target = 'illustrator';
	btMsg.body = saveMe.toSource() + '();';
	btMsg.send();
}

function AIAutoSavePopup()
{
	this.requiredContext = "\tAdobe Bridge must be running.\n\tExecute against Bridge CS5 as the target.\n";
	this.menuID = "tools/ai";
	this.menuCommandID = "tools/ai/启用自动保存提示";
	this.processId = 0;
	$.level = 1; 
}

AIAutoSavePopup.prototype.run = function(){
	var retval = true;
	if(!this.canRun()) {
		retval = false;
		return retval;
	}
	var popupCommand = MenuElement.create( "command", "启用自动保存提示", "at the end of " + this.menuID, this.menuCommandID );
	popupCommand.onSelect = function (m){
		if (m.text == '启用自动保存提示'){
			app.scheduleTask('autoSave()', time * 60000, true);
			AIAutoSavePopup.processId = d;
			m.text = '停用自动保存提示';
		} else {
			try {
				app.cancelTask(AIAutoSavePopup.processId);
			} catch(e) {
				alert(e);
			}
			m.text = '启用自动保存提示';
		}
	}
	return retval;
}

AIAutoSavePopup.prototype.canRun = function(){
	if(BridgeTalk.appName == "bridge") {
		if((MenuElement.find(this.menuID)) && (MenuElement.find(this.menuCommandID)))
		{
			$.writeln("Error:Menu element already exists!\nRestart Bridge to run this snippet again.");
			return false;
		}
		return true;
	}
	$.writeln("ERROR:: Cannot run AIAutoSavePopup");
	$.writeln(this.requiredContext);
	return false;
}

new AIAutoSavePopup().run();