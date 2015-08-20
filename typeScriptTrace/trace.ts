/** デバッグモードかどうか。本番公開時にはfalseにする */
var DEBUG_MODE:boolean = true;

/**
 * コンソールにログを出力します。
 * @param {string[]} ...args スクロール時間のミリ秒です。
 */
function trace(...args:string[]):void {
    if (DEBUG_MODE && this.console && typeof console.log != "undefined") {
        var str:string = "";
        if (args.length > 0)
            str = args.join(", ");

        console.log(str);
    }
}

// テストコード
trace("いちいち", "console.log()とか", "書いていられれないです");
