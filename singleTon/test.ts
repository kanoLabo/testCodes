class Hoge
{
    private static _instance:Hoge;

    public static getInstance():Hoge
    {
        if (!this._instance)
        {
            this._instance = new Hoge(Hoge.getInstance);
        }
        return this._instance;
    }

    constructor(caller:Function = null) {
        if (caller == Hoge.getInstance)
        {
            console.log("グッド！");
        }
        else
        {
            throw new Error("なっ、何をするだアア！");
        }
    }
}

Hoge.getInstance(); // グッド！を出力
new Hoge(); // 直接インスタンス化できないためエラー
