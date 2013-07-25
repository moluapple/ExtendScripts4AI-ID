// 为数组对象添加“forEach()”方法
Array.prototype.forEach || (Array.prototype.forEach = function (a) {
    var b = this.length;
    if ('function' != typeof a) throw new Error;
    for (var c = arguments[1], d = 0; b > d; d++) d in this && a.call(c, this[d], d, this)
})

function oRegex(fontName /*按字体名称构建正则表达式*/ ) {
    return new RegExp('\nName:' + fontName + '(?:.+\n){2}\tNativeName: (.+)\n.+\n\tFont Files: (.+(?:\n\t\t.+)?)')
}

function getAndSetPrefs(file /*存、读取预设*/ ) {
    var fontCount = app.textFonts.length,
        bool = !file.exists;
    app.preferences.setBooleanPreference('text/debugFontMenu/writeDebugFile', bool);
    if (!bool && app.preferences.getRealPreference('textFonts/length') !== fontCount &&
        confirm(['程序所检测到的字体总数有变',
		'新装字体或者打开的文档中包含缺失字体)',
		'是否重启？(新装字体请按"是"，缺失字体请按"否"，注意保存文档)'].join('\n'), !0, '友情提醒')) {
        bool = !0;
    }
    bool && app.preferences.setRealPreference('textFonts/length', fontCount);
    return bool
}

function readInfo(file /* 读取字体信息文件*/ ) {
    file.open('r');
    var data = file.read(5000000);
    file.close();
    return data
}

function restartAPP( /*借助ESTK重启AI*/ ) {
    var bt = new BridgeTalk(),
        func = function (appSpec) {
            while (BridgeTalk.getStatus(appSpec) !== 'ISNOTRUNNING') {
                $.sleep(200); /*$.writeln(BridgeTalk.getStatus('illustrator'));*/
            }
            $.sleep(1000);
            BridgeTalk.launch(appSpec)
        };
    bt.target = 'estoolkit';
    bt.body = func.toSource() + '("' + BridgeTalk.appSpecifier + '");'
    bt.send();
}

function getUsedFonts(a /*获取文档使用字体*/ ) {
    for (var b = new XML(a.XMPString), c = b.descendants('stFnt:fontName'), d = c.length(), e = [], f = 0; d > f; f++) e.push(c[f]);
    return e
}

function getPathAndCopy(arr /*字体名称*/ , info /*字体信息*/ , folder /*拷贝文件夹*/ ) {
    arr.forEach(function (fontName) {
        try {
            var m = info.match(oRegex(fontName)),
                nativeName = m[1],
                f = m[2].split('\n\t\t');
            f.forEach(function (a) {
                var b = new File(a);
                b.copy(new File(folder + '/' + nativeName + b.name.substr(-4)))
            })
        } catch (g) {
            alert('未能打包此字体(可能缺失字体)：' + fontName)
        }
    })
}

function main() {
    var ctFonts = new File(app.path + '/Support Files/Contents/Windows/CTFonts.txt');
    if (getAndSetPrefs(ctFonts)) return app.quit(), restartAPP(), void 0;
    var doc = activeDocument,
        f = new Folder(doc.path + '/Document Fonts'),
        arr = getUsedFonts(doc),
        info = readInfo(ctFonts);
    f.create(), getPathAndCopy(arr, info, f)
}

main();