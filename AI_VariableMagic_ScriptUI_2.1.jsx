//#include 'doEx.jsx'
#target illustrator
#targetengine 'main'
/* doEx.jsx：jQuery風にドキュメントのオブジェクトを抽出するかも
 * Copyright 2010 kamiseto. All Rights Reserved.
 * ScriptClip    http://556.sub.jp/scriptclip/
 * なにする？ DTP + WEB   http://d.hatena.ne.jp/kamiseto/
 */
function HintIcon() {
	return {
		type: "rgb",
		width: 23,
		height: 23,
		pictsize: 1,
		data: {
			r: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, .93, .94, .94, .94, .93, .92, .85, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, .93, .96, .99, .99, 1, 1, .98, .95, .85, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, .93, .96, 1, .99, 1, 1, 1, 1, 1, .94, .75, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, .93, .99, 1, 1, 1, 1, 1, .99, .98, .98, .85, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, .93, 1, 1, 1, .99, 1, 1, .99, .98, .97, .87, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, .93, .99, 1, 1, 1, 1, 1, .99, .97, .95, .85, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, .93, .98, 1, 1, 1, 1, .99, .96, .94, .92, .83, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, .91, .98, .99, 1, 1, .99, .96, .94, .91, .89, .77, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, .85, .94, .99, 1, .98, .96, .94, .92, .89, .82, .56, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, .87, .96, .97, .96, .93, .91, .89, .85, .72, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, .56, .86, .93, .93, .91, .89, .86, .76, .21, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, .74, .86, .91, .89, .87, .8, .49, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, .75, .82, .8, .78, .69, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, .18, .31, .31, .32, .12, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, .15, .56, .56, .54, .13, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, .11, .32, .45, .31, .13, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, .11, .27, .12, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
			g: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, .8, .8, .82, .83, .81, .75, .69, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, .8, .85, .96, 1, 1, .98, .92, .79, .66, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, .79, .85, 1, 1, 1, 1, .98, .96, .94, .75, .55, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, .78, .95, 1, 1, 1, .98, .96, .95, .93, .88, .61, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, .8, 1, 1, 1, .98, .98, .95, .94, .92, .9, .65, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, .81, 1, 1, .99, 1, .96, .95, .92, .89, .88, .6, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, .78, 1, 1, .98, .97, .97, .92, .9, .87, .86, .55, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, .72, .96, 1, .98, .96, .95, .91, .87, .85, .82, .45, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, .66, .79, 1, .99, .96, .93, .87, .85, .84, .59, .34, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, .65, .84, .97, .93, .89, .86, .83, .71, .42, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, .43, .65, .86, .91, .89, .84, .78, .44, .13, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, .56, .71, .89, .87, .85, .6, .3, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, .56, .69, .67, .65, .49, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, .07, .16, .16, .16, .04, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, .05, .44, .44, .43, .04, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, .03, .19, .33, .18, .04, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, .03, .17, .04, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
			b: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, .38, .38, .36, .33, .29, .24, .18, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, .38, .38, .65, .71, .63, .52, .35, .16, .09, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, .35, .37, .81, .82, .74, .59, .48, .36, .23, .05, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, .33, .69, .94, .98, .87, .55, .43, .3, .19, .02, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, .29, .86, 1, .97, .77, .48, .35, .22, .13, .08, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, .25, .8, .99, .96, .69, .4, .26, .15, .1, .07, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, .2, .66, .94, .93, .71, .3, .19, .14, .09, .06, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, .14, .46, .57, .71, .65, .22, .16, .11, .07, .01, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, .08, .06, .39, .33, .25, .18, .14, .09, .06, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, .07, .26, .21, .16, .11, .07, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, .11, .17, .12, .09, .01, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, .14, .11, .06, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, .02, .02, .01, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, .2, .19, .18, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, .01, .11, .01, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, .02, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
			a: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, .32, .82, 1, 1, 1, .82, .34, .02, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, .51, 1, 1, 1, 1, 1, 1, 1, .54, .03, .01, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, .32, 1, 1, 1, 1, 1, 1, 1, 1, 1, .38, .03, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, .82, 1, 1, 1, 1, 1, 1, 1, 1, 1, .84, .08, .02, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, .12, .04, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, .15, .05, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, .15, .05, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, .82, 1, 1, 1, 1, 1, 1, 1, 1, 1, .85, .15, .05, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, .34, 1, 1, 1, 1, 1, 1, 1, 1, 1, .44, .12, .04, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, .02, .71, 1, 1, 1, 1, 1, 1, 1, .75, .16, .08, .02, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, .1, .83, 1, 1, 1, 1, 1, .9, .23, .11, .04, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, .01, .29, 1, 1, 1, 1, 1, .39, .13, .06, .01, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, .02, 1, 1, 1, 1, 1, .17, .09, .02, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, .15, .05, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, .15, .05, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, .82, 1, 1, 1, .95, .15, .05, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, .42, .84, 1, .9, .51, .13, .04, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, .02, .26, .45, .33, .14, .08, .02, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, .02, .05, .07, .06, .03, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, .01, .02, .01, 0, 0, 0, 0, 0, 0, 0, 0, 0]
		}
	}
}

function GearIcon() {
	return {
		type: "rgb",
		width: 24,
		height: 24,
		pictsize: 1,
		data: {
			r: [0, 0, 0, 0, 0, .02, .15, .13, 0, .32, .99, .99, .99, .99, .59, 0, .04, .06, .03, 0, 0, 0, 0, 0, 0, 0, 0, 0, .19, .84, 1, .99, .59, .64, .99, 1, 1, .99, .88, .38, .96, 1, .89, .25, 0, 0, 0, 0, 0, 0, 0, .03, .96, .99, .99, .99, .99, .99, 1, 1, 1, 1, .99, .99, .99, .99, .99, .98, .18, 0, 0, 0, 0, 0, 0, .06, 1, .99, 1, 1, .99, .98, 1, 1, 1, 1, .99, .99, 1, 1, 1, .99, .25, 0, 0, 0, 0, 0, 0, .01, .9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, .99, .18, 0, 0, 0, 0, .18, .36, .32, .72, .99, .99, .99, .99, .99, .99, .99, .99, .99, .99, .99, .99, .99, .99, .91, .27, .27, .19, 0, 0, .87, .98, .98, .98, .98, .98, .98, .98, .98, .98, .98, .98, .98, .98, .98, .98, .98, .98, .98, .98, .98, .95, .05, .2, .97, .98, .98, .98, .98, .98, .98, .98, .98, .98, .95, .93, .98, .98, .98, .98, .98, .98, .98, .98, .98, .98, .33, .33, .97, .97, .97, .97, .97, .97, .97, .97, .97, .54, .06, .04, .45, .95, .97, .97, .97, .97, .97, .97, .97, .97, .51, .3, .96, .96, .96, .96, .96, .96, .96, .96, .52, 0, 0, 0, 0, .38, .96, .96, .96, .96, .96, .96, .96, .96, .47, .01, .42, .93, .96, .96, .96, .96, .96, .92, .05, 0, 0, 0, 0, 0, .82, .96, .96, .96, .96, .96, .96, .6, .05, 0, .22, .84, .95, .95, .95, .95, .95, .88, .02, 0, 0, 0, 0, 0, .77, .95, .95, .95, .95, .95, .92, .39, 0, .23, .93, .94, .95, .95, .95, .95, .95, .96, .38, 0, 0, 0, 0, .25, .96, .95, .95, .95, .95, .95, .95, .94, .4, .32, .94, .94, .94, .94, .94, .94, .94, .95, .94, .33, 0, 0, .24, .88, .95, .94, .94, .94, .94, .94, .94, .94, .49, .25, .93, .93, .93, .93, .93, .93, .93, .93, .95, .96, .78, .75, .96, .95, .93, .93, .93, .93, .93, .93, .93, .93, .37, .02, .86, .93, .93, .93, .93, .93, .93, .93, .93, .93, .95, .95, .94, .93, .93, .93, .93, .93, .93, .93, .93, .92, .1, 0, .29, .46, .46, .73, .92, .92, .92, .92, .92, .92, .92, .92, .92, .92, .92, .92, .92, .93, .86, .46, .46, .36, 0, 0, 0, 0, 0, .76, .91, .91, .91, .91, .91, .91, .91, .91, .91, .91, .91, .91, .91, .92, .94, .13, 0, 0, 0, 0, 0, 0, .05, .9, .9, .9, .9, .9, .9, .9, .9, .9, .9, .9, .9, .9, .9, .9, .92, .23, 0, 0, 0, 0, 0, 0, .04, .89, .9, .9, .9, .9, .9, .9, .9, .9, .9, .89, .9, .9, .9, .9, .9, .21, 0, 0, 0, .09, .16, .21, .24, .58, .81, .85, .84, .78, .76, .88, .89, .89, .89, .81, .75, .82, .85, .82, .64, .24, .21, .16, .09, .64, .64, .64, .64, .64, .64, .65, .65, .64, .64, .76, .88, .88, .8, .65, .64, .64, .65, .64, .64, .64, .64, .64, .64, .64, .64, .64, .64, .64, .64, .64, .64, .64, .64, .64, .67, .67, .64, .64, .64, .64, .64, .64, .64, .64, .64, .64, .64, .5, .58, .64, .64, .64, .64, .64, .64, .64, .64, .64, .64, .64, .64, .64, .64, .64, .64, .64, .64, .64, .64, .58, .5],
			g: [0, 0, 0, 0, 0, .02, .11, .1, 0, .24, .77, .8, .8, .78, .45, 0, .03, .04, .02, 0, 0, 0, 0, 0, 0, 0, 0, 0, .14, .64, .76, .77, .46, .49, .78, .75, .75, .77, .68, .29, .75, .76, .68, .19, 0, 0, 0, 0, 0, 0, 0, .02, .73, .78, .79, .8, .8, .78, .76, .75, .74, .75, .77, .79, .8, .79, .78, .75, .14, 0, 0, 0, 0, 0, 0, .04, .75, .76, .74, .74, .78, .8, .75, .74, .74, .74, .8, .79, .75, .74, .76, .76, .18, 0, 0, 0, 0, 0, 0, .01, .67, .74, .74, .74, .74, .74, .74, .74, .74, .74, .74, .74, .74, .74, .74, .74, .13, 0, 0, 0, 0, .13, .27, .24, .54, .73, .73, .73, .73, .73, .73, .73, .73, .73, .73, .73, .73, .73, .73, .67, .21, .2, .14, 0, 0, .65, .76, .81, .81, .77, .72, .72, .72, .72, .72, .72, .72, .72, .72, .72, .72, .72, .76, .81, .81, .77, .71, .04, .14, .72, .75, .71, .71, .71, .71, .71, .71, .71, .71, .69, .68, .71, .71, .71, .71, .71, .71, .71, .71, .74, .73, .24, .24, .72, .7, .7, .7, .7, .7, .7, .7, .7, .39, .04, .02, .33, .69, .7, .7, .7, .7, .7, .7, .7, .72, .37, .22, .69, .69, .69, .69, .69, .69, .69, .69, .37, 0, 0, 0, 0, .27, .69, .69, .69, .69, .69, .69, .69, .69, .34, 0, .3, .66, .68, .68, .68, .68, .68, .65, .03, 0, 0, 0, 0, 0, .58, .68, .68, .68, .68, .68, .68, .42, .04, 0, .15, .58, .66, .67, .67, .67, .67, .67, .01, 0, 0, 0, 0, 0, .59, .67, .67, .67, .67, .67, .64, .27, 0, .16, .64, .65, .65, .65, .65, .65, .65, .75, .33, 0, 0, 0, 0, .22, .76, .66, .65, .65, .65, .65, .65, .65, .27, .22, .64, .64, .65, .65, .64, .65, .65, .72, .78, .28, 0, 0, .21, .74, .73, .65, .64, .65, .65, .64, .65, .64, .34, .17, .64, .64, .64, .64, .64, .64, .64, .64, .75, .8, .67, .64, .81, .76, .64, .64, .64, .64, .64, .64, .64, .64, .25, .01, .58, .62, .62, .62, .62, .62, .62, .62, .62, .67, .72, .72, .68, .62, .62, .62, .62, .62, .62, .62, .62, .62, .07, 0, .2, .31, .31, .49, .61, .61, .61, .61, .61, .61, .61, .61, .61, .61, .61, .61, .61, .64, .64, .31, .31, .24, 0, 0, 0, 0, 0, .5, .6, .6, .6, .6, .6, .6, .6, .6, .6, .6, .6, .6, .6, .62, .74, .1, 0, 0, 0, 0, 0, 0, .04, .59, .59, .59, .59, .59, .59, .59, .59, .59, .59, .59, .59, .59, .59, .59, .65, .16, 0, 0, 0, 0, 0, 0, .03, .58, .58, .58, .58, .58, .58, .58, .58, .58, .58, .58, .58, .58, .58, .58, .58, .14, 0, 0, 0, .09, .16, .21, .24, .47, .6, .58, .58, .6, .59, .57, .57, .57, .57, .59, .59, .59, .58, .59, .51, .24, .21, .16, .09, .64, .64, .64, .64, .64, .64, .64, .64, .64, .64, .6, .56, .56, .58, .64, .64, .64, .64, .64, .64, .64, .64, .64, .64, .64, .64, .64, .64, .64, .64, .64, .64, .64, .64, .64, .63, .63, .64, .64, .64, .64, .64, .64, .64, .64, .64, .64, .64, .5, .58, .64, .64, .64, .64, .64, .64, .64, .64, .64, .64, .64, .64, .64, .64, .64, .64, .64, .64, .64, .64, .58, .5],
			b: [0, 0, 0, 0, 0, 0, 0, 0, 0, .01, .14, .27, .28, .16, .04, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, .05, .06, .12, .07, .06, .16, 0, 0, .15, .1, .04, .13, .06, .06, 0, 0, 0, 0, 0, 0, 0, 0, 0, .04, .19, .23, .25, .26, .16, .08, 0, 0, .05, .15, .24, .27, .23, .2, .07, 0, 0, 0, 0, 0, 0, 0, 0, .03, .11, 0, 0, .16, .31, .02, 0, 0, 0, .27, .21, 0, 0, .1, .08, 0, 0, 0, 0, 0, 0, 0, 0, .01, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, .02, 0, 0, 0, 0, 0, 0, .01, .03, .03, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, .02, .03, .02, 0, 0, 0, .04, .19, .39, .38, .21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, .15, .36, .39, .23, .06, 0, 0, .06, .13, 0, .01, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, .01, 0, .13, .08, 0, 0, .07, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, .09, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, .01, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, .02, .18, .01, 0, 0, 0, 0, 0, .16, .02, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, .27, .2, 0, 0, 0, 0, .13, .31, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, .2, .41, .18, 0, 0, .13, .4, .22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, .01, .29, .43, .38, .37, .45, .31, .01, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, .13, .23, .24, .13, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, .07, .16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, .05, .31, .05, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, .14, .03, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, .09, .16, .21, .24, .27, .21, .11, .14, .29, .28, .02, 0, 0, 0, .2, .32, .17, .11, .19, .27, .24, .21, .16, .09, .64, .64, .64, .64, .64, .64, .61, .62, .64, .63, .31, 0, 0, .21, .62, .64, .63, .62, .64, .64, .64, .64, .64, .64, .64, .64, .64, .64, .64, .64, .64, .64, .64, .64, .64, .57, .57, .63, .64, .64, .64, .64, .64, .64, .64, .64, .64, .64, .5, .58, .64, .64, .64, .64, .64, .64, .64, .64, .64, .64, .64, .64, .64, .64, .64, .64, .64, .64, .64, .64, .58, .5],
			a: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, .28, .79, .8, .41, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, .23, .08, 0, 0, .69, 1, 1, .87, 0, 0, .03, .22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, .03, .6, 1, .89, .23, .03, .95, 1, 1, 1, .16, .13, .8, 1, .62, .04, 0, 0, 0, 0, 0, 0, 0, 0, .28, 1, 1, 1, .98, .68, 1, 1, 1, 1, .73, .93, 1, 1, 1, .43, 0, 0, 0, 0, 0, 0, 0, 0, .04, .95, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, .16, 0, 0, 0, 0, 0, 0, 0, 0, 0, .63, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, .81, 0, 0, 0, 0, 0, 0, .02, .49, .52, .49, .7, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, .79, .49, .51, .49, .02, 0, 0, .26, 1, 1, 1, 1, 1, 1, 1, .91, .42, .15, .15, .4, .89, 1, 1, 1, 1, 1, 1, 1, .3, 0, 0, .57, 1, 1, 1, 1, 1, 1, .89, .11, 0, 0, 0, 0, .09, .87, 1, 1, 1, 1, 1, 1, .62, 0, 0, .24, .89, 1, 1, 1, 1, 1, .35, 0, 0, 0, 0, 0, 0, .31, 1, 1, 1, 1, 1, .95, .33, 0, 0, 0, .07, .65, 1, 1, 1, .99, .05, 0, 0, 0, 0, 0, 0, .02, .97, 1, 1, 1, .76, .13, 0, 0, 0, 0, 0, .35, .99, 1, 1, .98, .02, 0, 0, 0, 0, 0, 0, 0, .96, 1, 1, 1, .51, .01, 0, 0, 0, .07, .65, 1, 1, 1, 1, 1, .22, 0, 0, 0, 0, 0, 0, .18, 1, 1, 1, 1, 1, .76, .13, 0, 0, .59, 1, 1, 1, 1, 1, 1, .74, .01, 0, 0, 0, 0, 0, .7, 1, 1, 1, 1, 1, 1, .65, 0, 0, .36, 1, 1, 1, 1, 1, 1, 1, .7, .12, 0, 0, .11, .67, 1, 1, 1, 1, 1, 1, 1, .4, 0, 0, .06, .79, .83, .8, .88, 1, 1, 1, 1, .99, .85, .84, .99, 1, 1, 1, 1, .92, .79, .82, .8, .08, 0, 0, 0, 0, 0, 0, .52, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, .7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, .87, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, .98, .08, 0, 0, 0, 0, 0, 0, 0, 0, .22, 1, 1, 1, 1, .92, 1, 1, 1, 1, .92, 1, 1, 1, 1, .39, 0, 0, 0, 0, 0, 0, 0, 0, .13, .85, 1, .99, .52, .1, .98, 1, 1, 1, .25, .38, .96, 1, .87, .17, 0, 0, 0, 0, 0, 0, 0, 0, 0, .05, .54, .29, 0, 0, .78, 1, 1, .94, .02, 0, .18, .53, .06, 0, 0, 0, 0, 0, .02, .08, .13, .17, .2, .24, .27, .27, .27, .32, .69, 1, 1, .8, .32, .27, .27, .27, .23, .2, .16, .13, .07, .01, .15, .49, .64, .73, .77, .82, .84, .85, .88, .89, .9, .91, .91, .9, .89, .88, .85, .84, .82, .76, .72, .63, .47, .11, 0, .01, .03, .05, .06, .09, .09, .1, .13, .14, .14, .14, .14, .14, .14, .13, .1, .09, .09, .06, .05, .03, .01, 0]
		}
	}
}

function helpme() {
	var a = [
		["* CSV文件首行用于命名变量", "需符合XML规则(不含空格引号等特殊字符)", "链接图数据列放置于最后", '一律命名"image"', "图像路径格式	>PC: C:\dir\file.jpg 	>MAC: /Volumes/dir/file.jpg"].join("，"), ["* 请事先创建相应数目占位符对象也即建立好模板再运行脚本", "(若勾选增选图像源则占位符计数 + 1)。动态可视路径仅供娱乐", "数量以数据列数为上限"].join("，"), ["* 数据组打印， 请先使用{文件>打印}命令", "作好各项打印设置，点击完成后再点按钮执行"].join("，"), ["* 导出PDF，将数据组全部保存于桌面上新建的Datasets文件夹里", "无法加载预设时: 1.打开菜单 {编辑>Adobe PDF 预设} 对话框", "点确认关闭，之后即可使用脚本内置的PDF选项导出", "2.完成步骤1后，再次运行脚本可正常加载预设"].join("，"), ["* 合并数据组", "根据页面大小将所有数据组拷贝至新文档进行自动拼版", "请注意页数需小于 AI 画板上限，边距指页边至少留空值"].join("，"), ["* 建议将复杂非变量图形建立为符号", "运行合并命令前需绘制定界矩形于最上层", "将所有对象编组并放置于最顶层"].join("，"), ["* 作者: animalia 跳入苹果 2011-8"]
	];
	alert(a.join("\n\n"), "使用提示")
}

function printDs() {
	function a() {
		var a = app.activeDocument;
		for (var b = 0; b < a.dataSets.length; b++) a.dataSets[b].display(), app.redraw(), a.print()
	}
	try {
		btMsg(a.toString() + "\n a();")
	} catch (b) {
		alert(b)
	}
}

function exportPDF() {
	function a(a) {
		var b = new PDFSaveOptions;
		a ? b.pDFPreset = app.PDFPresetsList[a] : (b.preserveEditability = !1, b.embedAllFonts = !0, b.viewAfterSaving = !1);
		var c = app.activeDocument,
			d = new Folder(Folder.desktop + "/Datasets");
		c.dataSets.length && !d.exists && d.create();
		for (var e = 0; e < c.dataSets.length; e++) {
			c.dataSets[e].display();
			var f = new File(d + "/" + c.dataSets[e].name);
			c.saveAs(f, b)
		}
	}
	try {
		btMsg(a.toString() + "\n a(" + this.parent.items.PRESET.selection + ");")
	} catch (b) {
		alert(b)
	}
}

function datasetMerge() {
	try {
		btMsg(datasetMakeup.toString() + "\n datasetMakeup(" + this.parent.items.TRIM.text + ");")
	} catch (a) {
		alert(a)
	}
}
function datasetMakeup(a) {
	var a = a * 2.83465,
		b = app.activeDocument,
		c = b.width,
		d = b.height,
		e = b.groupItems[0],
		f = e.pageItems[0].width,
		g = e.pageItems[0].height,
		h = Math.floor((c - a * 2) / f),
		i = Math.floor((d - a * 2) / g),
		j = h * i,
		k = Math.ceil(b.dataSets.length / j),
		l = (c - f * h) / 2,
		m = (d - g * i) / 2,
		n, o, p, q, r, s, t, u, v;
	if (k > 100) alert("共计" + k + "页，超过画板上限，可尝试将数据分组载入...");
	else {
		n = app.documents.add(DocumentColorSpace.CMYK, c, d, k, DocumentArtboardLayout.GridByRow, 20, Math.round(Math.sqrt(k))), b.activate();
		for (s = 0; s < b.dataSets.length; s++) b.dataSets[s].display(), o = e.duplicate(), targetLayer = s === 0 ? n.layers[0] : n.layers.add(), o.moveToEnd(targetLayer);
		n.layers.add(), b.close(SaveOptions.DONOTSAVECHANGES), t = 0;
		for (r = n.layers.length - 1; r > 0; r -= j) {
			p = n.artboards[t].artboardRect[0], q = n.artboards[t].artboardRect[1], v = -1;
			for (u = 0; u < j; u++) {
				if (r - u < 1) break;
				u % h == 0 && v++, o = n.layers[r - u].groupItems[0], o.left = p + l + f * (u % h), o.top = q - m - g * v
			}
			t++
		}
	}
}

function run() {
	try {
		btMsg(ImportData.toString() + "\n ImportData();")
	} catch (a) {
		alert(a)
	}
}

function ImportData() {
	var a = app.documents.length ? activeDocument : app.documents.add(),
		b = getValue(myD.items.OPTION),
		c = b.csvData,
		d = (c[0].join().match(/image/g) || []).length,
		e = c[0].length - d,
		f, g, h, i, j, k, l, m, n, o;
	if (a.textFrames.length < e) alert("缺少文本占位符对象");
	else {
		if (a.placedItems.length < d + b.link) {
			alert("缺少图像占位符对象");
			return
		}
		b.link && (i = (new Folder(b.folder)).getFiles(/.+(?:gif|jpe?g|[ew]mf|eps|tiff?psd|pdf|bmp|png)$/i), m = a.placedItems[a.placedItems.length - 1], k = a.variables.add(), k.kind = VariableKind.IMAGE, k.name = "FolderImage", m.contentVariable = k, m.file = i[0]);
		for (g = 1; g < c.length; g++) {
			h = c[g], b.link && m.file = i[g - 1];
			for (f = 0; f < h.length; f++) {
				if (b.visib && f < a.pathItems.length) {
					try {
						l = a.variables.getByName("VisualPath_" + (f + 1))
					} catch (p) {
						l = a.variables.add(), l.kind = VariableKind.VISIBILITY, a.pathItems[f].visibilityVariable = l, l.name = "VisualPath_" + (f + 1)
					}
					a.pathItems[f].hidden = Math.round(Math.random())
				}
				if (c[0][f] == "image") {
					n = a.placedItems[f - e];
					try {
						k = a.variables.getByName("Image_" + (f - e + 1))
					} catch (p) {
						k = a.variables.add(), k.kind = VariableKind.IMAGE, k.name = "Image_" + (f - e + 1), n.contentVariable = k
					}
					n.file = new File(h[f])
				} else {
					o = a.textFrames[f];
					try {
						j = a.variables.getByName(c[0][f])
					} catch (p) {
						j = a.variables.add(), j.kind = VariableKind.TEXTUAL, j.name = c[0][f], o.contentVariable = j
					}
					o.contents = unescape(escape(h[f]).replace(/%0A/g, String.fromCharCode(13)))
				}
			}
			a.dataSets.add()
		}
		a.dataSets[0].display()
	}
}

function getValue(a) {
	return {
		csvData: (new CSVData(File(a.items._DATA.text))).parse(),
		folder: a.items._IMG.text,
		link: a.items.LINK.value,
		visib: a.items.VISIB.value
	}
}
function getImage() {
	return String((new Folder).selectDlg("请选择图像路径:"))
}
function selectfile() {
	this.parent.items._DATA.text = File.openDialog("选择 CSV 文件", "CSV 文件:*.csv").fsName
}

function BridgeTalkErrorHandler(a) {
	alert(a.body.replace(/.+/, "很抱歉, 发生如下错误") + "(" + a.headers["Error-Code"] + ")")
}

function btMsg(a) {
	var b = new BridgeTalk;
	b.target = "illustrator", b.body = a, b.onError = BridgeTalkErrorHandler, b.send()
}

function drawMosaicPictA(c, d, e) {
	var f = 0,
		h = 0;
	try {
		f = typeof e[0] == "number" ? e[0] : 0, h = typeof e[1] == "number" ? e[1] : 0
	} catch (i) {}
	try {
		var j = g = b = 0,
			k = {};
		for (var l = 0; l < d.height; l++) for (var m = 0; m < d.width; m++) c.graphics.newPath(), c.graphics.rectPath(m * d.pictsize + f, l * d.pictsize + h, d.pictsize, d.pictsize), d.type == "mono" ? j = g = b = d.data[l * d.width + m] : (j = d.data.r[l * d.width + m], g = d.data.g[l * d.width + m], b = d.data.b[l * d.width + m], a = d.data.a[l * d.width + m]), k = c.graphics.newBrush(c.graphics.BrushType.SOLID_COLOR, [j, g, b, a]), c.graphics.fillPath(k)
	} catch (n) {
		$.writeln("xxx : " + n)
	}
}
var myDialogMaker;
(function () {
	var setPosition = function (a, b) {
			return [a[0] + b[0], a[1] + b[1], a[2] + b[2], a[3] + b[3]]
		};
	extend = function (a, b) {
		try {
			for (var c in b) try {
				a.prototype[c] = b[c]
			} catch (d) {
				a[c] = b[c]
			}
		} catch (d) {}
		return a
	}, myDialogMaker = function (a) {
		return new myDialogMaker.prototype.init(a)
	}, myDialogMaker.prototype = {
		init: function (option) {
			if (!option) {
				var F = File.openDialog();
				F.open("r"), eval("option = " + F.read()), F.close()
			}
			this.wD = new Window(option.type, option.title, option.pos, option.properties), extend(this.wD, option.option), option.layout.length > 0 && this.items = this.buildLayout(this.wD, option.layout);
			return this
		},
		dialog: function (a, b, c) {
			var d = new Window("dialog", c.label, c.pos, c.option);
			try {
				c.layout.length > 0 && d.items = this.buildLayout(d, c.layout)
			} catch (e) {}
			d.parents = a;
			return d
		},
		statictext: function (a, b, c) {
			var d = a.add("statictext", b, c.label, {});
			return d
		},
		edittext: function (a, b, c) {
			if (c.width && c.height && c.size) {
				if (c.label) var d = this.statictext(a, setPosition([0, 3, c.width - c.size * 10, 20], b), c);
				var e = a.add(c.type, setPosition([c.width - c.size * 10, 0, c.width, c.height], b), c["default"], {
					name: c.name
				})
			} else {
				var f = 0;
				if (c.label) {
					f = c.label.length;
					var d = this.statictext(a, [b[0], b[1], b[0] * 1 + f * 10, b[3]], c)
				}
				var e = a.add(c.type, [b[0] * 1 + f * 10, b[1], b[2], b[3]], c["default"], c.option)
			}
			extend(e, c.option);
			return e
		},
		checkbox: function (a, b, c) {
			var d = a.add("checkbox", [b[0], b[1], b[2] * 1 + c.label.length * 10, b[3]], c.label);
			extend(d, c.option);
			return d
		},
		checkboxies: function (a, b, c) {
			var d = a.add("group", b, c.label);
			switch (typeof c.list) {
			case "object":
				for (var e in c.list) this.checkbox(d, checkpos, c.list[e])
			}
			return d
		},
		radiobutton: function (a, b, c) {
			var d = a.add("radiobutton", b, c.label);
			extend(d, c.option);
			return d
		},
		button: function (a, b, c) {
			var d = a.add("button", b, c.label, {
				name: c.name
			});
			extend(d, c.option);
			return d
		},
		iconbutton: function (a, b, c) {
			try {
				var d = ScriptUI.newImage(c.label),
					e = a.add("iconbutton", b, d);
				extend(e, c.option);
				return e
			} catch (f) {
				return this.button(a, b, c)
			}
		},
		dropdownlist: function (a, b, c) {
			var d = a.add("dropdownlist", b);
			c.list && this.addListItems(d, c.list), d.selection = d.items[0], extend(d, c.option);
			return d
		},
		treeview: function (a, b, c) {
			var d = a.add("treeview", b, "");
			c.list && this.addListItems(d, c.list), extend(d, c.option);
			return d
		},
		listbox: function (a, b, c) {
			var d = a.add("listbox", b, "");
			c.list && this.addListItems(d, c.list), extend(d, c.option);
			return d
		},
		flashplayer: function (a, b, c) {
			var d = a.add("flashplayer", b);
			extend(d, c.option);
			return d
		},
		progressbar: function (a, b, c) {
			var d = a.add("progressbar", b);
			extend(d, c.option);
			return d
		},
		addListItems: function (a, b) {
			switch (b.constructor.name) {
			case "Function":
				b(a);
				break;
			case "Array":
				for (var c in b) a.add("item", b[c]);
				break;
			case "Object":
				for (var c in b) a.add("item", c)
			}
		},
		slider: function (a, b, c) {
			var d = a.add("slider", b, "");
			extend(d, c.option);
			return d
		},
		group: function (a, b, c) {
			var d = a.add("group", b, c.label);
			d.items = this.buildLayout(d, c.items), extend(d, c.option);
			return d
		},
		panel: function (a, b, c) {
			var d = a.add("panel", b, c.label);
			d.items = this.buildLayout(d, c.items), extend(d, c.option);
			return d
		},
		save: function () {},
		items: {},
		getItem: function (a) {
			return this.items.hasOwnProperty(a) ? this.items[a] : !1
		},
		temp: {},
		buildLayout: function (a, b) {
			var c = b.length,
				d = {};
			for (var e = 0; e < c; e++) {
				var f = myDialogMaker.prototype[b[e].type](a, b[e].pos, b[e]);
				b[e].hasOwnProperty("name") && typeof b[e].name == "string" && d[b[e].name] = f
			}
			return d
		}
	}, myDialogMaker.prototype.init.prototype = myDialogMaker.prototype
})();
var buildDialogLayout = myDialogMaker.prototype.buildLayout,
	addListItems = myDialogMaker.prototype.addListItems,
	MDM = myDialogMaker,
	/**Author: isamuyano
	 *  http://code.google.com/p/csvdatajs/
	 */
	CSVData = CSVData ||
function (a) {
	this.colDelimiter = ",", this.data = function () {
		a.open("r");
		var b = a.read();
		a.close();
		return b
	}, this.parse = function () {
		var a = this.data(),
			b = [],
			c = [],
			d = !1,
			e = 0,
			f = 0;
		for (i = 0; i < a.length; i++) {
			var g = a.charAt(i);
			g == '"' && (f++, d ? f % 2 == 0 && (i == a.length - 1 || a.charAt(i + 1) != '"') && (d = !1) : d = !0);
			if (!d) if (g == this.colDelimiter) {
				var h = a.substring(e, i);
				h = this.unescape(h), c.push(h), e = i + 1
			} else if (g == "\r") {
				var h = a.substring(e, i);
				h = this.unescape(h), c.push(h), i += 1, e = i + 1, b.push(c), c = []
			} else if (g == "\n") {
				var h = a.substring(e, i);
				h = this.unescape(h), c.push(h), e = i + 1, b.push(c), c = []
			}
		}
		return b
	}, this.escape = function (a) {
		a = a.replace(/"/g, '""'), a = '"' + a + '"';
		return a
	}, this.unescape = function (a) {
		a.charAt(0) == '"' && a.charAt(a.length - 1) == '"' && (a = a.substring(1, a.length - 1)), a = a.replace(/""/g, '"');
		return a
	}
}, myD = MDM({
	type: "palette",
	title: "变量巫术师   V 2.1",
	option: {
		closeOnKey: "OSCmnd+W",
		onShow: function () {
			var a = this.children[1].items.PRESET;
			a.items.length > 1 && a.enabled = !0
		}
	},
	layout: [{
		name: "OPTION",
		type: "panel",
		label: "变量创建",
		pos: [0, 0, 315, 190],
		items: [{
			type: "statictext",
			label: "变量数据源:",
			pos: [10, 10, 100, 30]
		}, {
			name: "DATA",
			type: "button",
			label: "CSV文件",
			pos: [10, 30, 100, 55],
			option: {
				onClick: function () {
					this.parent.items._DATA.text = File.openDialog("选择 CSV 文件", "CSV 文件:*.csv").fsName
				}
			}
		}, {
			name: "_DATA",
			type: "edittext",
			label: "",
			pos: [110, 30, 300, 55]
		}, {
			name: "LINK",
			type: "checkbox",
			label: "增选链接图像",
			pos: [10, 60, 50, 80]
		}, {
			name: "IMG",
			type: "button",
			label: "图像文件夹",
			pos: [10, 85, 100, 110],
			option: {
				onClick: function () {
					this.parent.items._IMG.text = (new Folder).selectDlg("请选择图像路径:").fsName
				}
			}
		}, {
			name: "_IMG",
			type: "edittext",
			label: "",
			pos: [110, 85, 300, 110]
		}, {
			type: "statictext",
			label: "动态可视路径:",
			pos: [10, 120, 100, 140]
		}, {
			name: "VISIB",
			type: "checkbox",
			label: "创建随机可视性",
			pos: [110, 118, 150, 138]
		}, {
			name: "OK",
			type: "button",
			label: "确定",
			pos: [110, 145, 200, 170],
			option: {
				onClick: run
			}
		}]
	}, {
		type: "panel",
		label: "数据组处理",
		pos: [0, 0, 315, 95],
		items: [{
			type: "statictext",
			label: "",
			pos: [0, 0, 1, 1]
		}, {
			name: "MERGE",
			type: "button",
			label: "合并数据组",
			pos: [110, 50, 200, 75],
			option: {
				onClick: datasetMerge,
				enabled: app.version.split(".")[0] > 13
			}
		}, {
			type: "statictext",
			label: "边距:",
			pos: [210, 55, 240, 75]
		}, {
			name: "TRIM",
			type: "edittext",
			label: "",
			pos: [245, 52, 275, 75],
			option: {
				text: "0"
			}
		}, {
			type: "statictext",
			label: "mm",
			pos: [280, 55, 300, 75]
		}, {
			name: "EXPORT",
			type: "button",
			label: "批导出PDF",
			pos: [10, 15, 100, 40],
			option: {
				onClick: exportPDF
			}
		}, {
			name: "PRINT",
			type: "button",
			label: "批打印",
			pos: [10, 50, 100, 75],
			option: {
				onClick: printDs
			}
		}, {
			name: "PRESET",
			type: "dropdownlist",
			list: function () {
				try {
					return app.PDFPresetsList
				} catch (a) {
					return ["无法加载预设, 请按提示操作"]
				}
			}(),
			option: {
				enabled: !1
			},
			pos: [110, 15, 300, 40]
		}]
	}, {
		name: "",
		type: "group",
		label: "",
		pos: [0, 0, 315, 24],
		items: [{
			name: "",
			type: "button",
			label: "使用提示",
			pos: [0, 0, 23, 23],
			option: {
				onDraw: function () {
					drawMosaicPictA(this, HintIcon())
				},
				onClick: helpme
			}
		}, {
			name: "",
			type: "button",
			label: "",
			pos: [50, 0, 74, 24],
			option: {
				onDraw: function () {
					drawMosaicPictA(this, GearIcon())
				},
				onClick: function () {
					var a = $.screens[0].toString().split("-")[1].split(":");
					this.location = [50 + Math.random() * 240, this.location[1]];
					while (this.parent.parent.location[0] < a[0] - 15) this.parent.parent.location = [this.parent.parent.location[0] + 10, this.parent.parent.location[1]]
				}
			}
		}]
	}]
});
myD.wD.show()