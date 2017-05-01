var Main = (function () {
    function Main() {
        // ランダムに選択する文字群
        this.texts = [
            "ブ",
            "ー",
            "！", (function () {
                function Main() {
                    // ランダムに選択する文字群
                    this.texts = [
                        "ブ",
                        "ー",
                        "！",
                        "バ",
                        "ン",
                        "ゥ",
                        "ボ",
                        "オ"
                    ];
                    // ランダムに選択する文字の数
                    this.textCount = this.texts.length;
                    // ツイートするテキスト
                    this.tweetText = "";
                    // ツイートする文字数。50文字以上100文字未満
                    this.outputNum = 50 * (Math.random() + 1);
                    this.outputArea = document.getElementById("outputArea");
                    this.createTweetText();
                    this.manageButtons();
                }
                /**
                 * ツイート文字列を生成する。
                 */
                Main.prototype.createTweetText = function () {
                    this.tweetText = "";
                    for (var i = 0; i < this.outputNum; i++) {
                        this.tweetText += this.getText();
                    }
                    this.displayOutPutText();
                };
                /**
                 * ランダムにつなげる文字を取得する。
                 */
                Main.prototype.getText = function () {
                    return this.texts[Math.floor(Math.random() * this.textCount)];
                };
                /**
                 * テキストエリアに文字を表示する。
                 */
                Main.prototype.displayOutPutText = function () {
                    this.outputArea.value = this.tweetText;
                };
                /**
                 * ボタンのイベント設定
                 */
                Main.prototype.manageButtons = function () {
                    var _this = this;
                    // 文字列を再生成するボタン
                    document.getElementById("generateButton").addEventListener("click", function () { return _this.createTweetText(); });
                    // 生成した文字列をツイートするボタン
                    document.getElementById("tweetButton").addEventListener("click", function () {
                        window.open("https://twitter.com/intent/tweet?text=" + _this.tweetText + " : &hashtags=ンボォJS版 http://jsdo.it/tonkotsuboy/04Ko");
                    });
                };
                return Main;
            }()),
            // ウインドウロード完了時にMainクラスを実行する。
            window.addEventListener("load", function () { return new Main(); }),
            "バ",
            "ン",
            "ゥ",
            "ボ",
            "オ"
        ];
        // ランダムに選択する文字の数
        this.textCount = this.texts.length;
        // ツイートするテキスト
        this.tweetText = "";
        // ツイートする文字数。50文字以上100文字未満
        this.outputNum = 50 * (Math.random() + 1);
        this.outputArea = document.getElementById("outputArea");
        this.createTweetText();
        this.manageButtons();
    }
    /**
     * ツイート文字列を生成する。
     */
    Main.prototype.createTweetText = function () {
        this.tweetText = "";
        for (var i = 0; i < this.outputNum; i++) {
            this.tweetText += this.getText();
        }
        this.displayOutPutText();
    };
    /**
     * ランダムにつなげる文字を取得する。
     */
    Main.prototype.getText = function () {
        return this.texts[Math.floor(Math.random() * this.textCount)];
    };
    /**
     * テキストエリアに文字を表示する。
     */
    Main.prototype.displayOutPutText = function () {
        this.outputArea.value = this.tweetText;
    };
    /**
     * ボタンのイベント設定
     */
    Main.prototype.manageButtons = function () {
        var _this = this;
        // 文字列を再生成するボタン
        document.getElementById("generateButton").addEventListener("click", function () { return _this.createTweetText(); });
        // 生成した文字列をツイートするボタン
        document.getElementById("tweetButton").addEventListener("click", function () {
            window.open("https://twitter.com/intent/tweet?text=" + _this.tweetText + " : &hashtags=ンボォJS版 http://jsdo.it/tonkotsuboy/04Ko");
        });
    };
    return Main;
}());
// ウインドウロード完了時にMainクラスを実行する。
window.addEventListener("load", function () { return new Main(); });
//# sourceMappingURL=index.js.map