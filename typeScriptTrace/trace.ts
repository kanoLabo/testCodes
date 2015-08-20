/** デバッグモードかどうか。本番公開時にはfalseにする */
var DEBUG_MODE:boolean = true;

/**
 * デバッグモードが有効で、console.log()が使える時に、
 * コンソールに文字列を出力します。
 * @param {string[]} ...args 出力したい文字列です。
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
