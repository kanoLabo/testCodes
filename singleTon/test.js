/**
 * シングルトンで実装されたHogeクラス
 */
var Hoge = (function () {
    /**
      * コンストラクタ
      */
    function Hoge(caller) {
        if (caller == Hoge.getInstance)
            console.log("☆2 インスタンスを作成。一度しか呼ばれない。");
        else if (Hoge._instance)
            throw new Error("既にインスタンスが存在するためエラー。");
        else
            throw new Error("コンストラクタの引数が不正な為エラー。");
    }
    /**
     * インスタンスの取得
     */
    Hoge.getInstance = function () {
        console.log("☆1 Hogeクラスインスタンスの取得");
        // インスタンスが存在しない場合、new演算子でインスタンスを作成
        // 引数に渡すのは、Hoge.getInstanceというFunction
        if (!this._instance)
            this._instance = new Hoge(Hoge.getInstance);
        // 生成済みのインスタンスを返す
        return this._instance;
    };
    return Hoge;
})();
// ☆1と☆2のログが出力。Hogeクラスのインスタンスがnewで生成される
var hoge1 = Hoge.getInstance();
// ☆1のログのみ出力。インスタンスはnewで生成されない
var hoge2 = Hoge.getInstance();
//# sourceMappingURL=test.js.map