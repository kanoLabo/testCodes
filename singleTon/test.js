var Hoge = (function () {
    function Hoge(caller) {
        if (caller === void 0) { caller = null; }
        if (caller == Hoge.getInstance) {
            console.log("グッド！");
        }
        else {
            throw new Error("なっ、何をするだアア！");
        }
    }
    Hoge.getInstance = function () {
        if (!this._instance) {
            this._instance = new Hoge(Hoge.getInstance);
        }
        return this._instance;
    };
    return Hoge;
})();
Hoge.getInstance(); // グッド！を出力
new Hoge(); // 直接インスタンス化できないためエラー
//# sourceMappingURL=test.js.map