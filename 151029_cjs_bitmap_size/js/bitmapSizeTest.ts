/// <reference path="../typings/easeljs/easeljs.d.ts" />
/// <reference path="../typings/preloadjs/preloadjs.d.ts" />


namespace project {
    export class ImageBounds {
        /** ステージ */
        private _stage:createjs.Stage;
        /** Canvasエレメント */
        private _canvas:HTMLCanvasElement;

        constructor()
        {
            // ステージを準備
            this._canvas = <HTMLCanvasElement> document.getElementById("myCanvas")
            this._stage = new createjs.Stage(this._canvas);
            // Tickerを作成
            createjs.Ticker.timingMode = createjs.Ticker.RAF;
            createjs.Ticker.addEventListener("tick", (event) => this.tickeHandler(event));

            // リサイズイベント
            this.resizeHandler();
            window.addEventListener("resize", () => this.resizeHandler());
        }

        public init():void
        {
            let queue:createjs.LoadQueue = new createjs.LoadQueue();
            queue.addEventListener("fileload", (e) => this._loadCompleteHandler(e));
            queue.loadFile({src:"images/image.jpg"});
        }

        private _loadCompleteHandler(event)
        {
            var bitmap:createjs.Bitmap = new createjs.Bitmap(event.result);
            bitmap.rotation = 20;
            this._stage.addChild(bitmap);
            document.getElementById("contentsInfo").innerHTML =

                "bitmap.image.width：" + bitmap.image.width + ", bitmap.image.height：" +  bitmap.image.height + "<br>" +
                "bitmap.getBounds().width：" +  bitmap.getBounds().width + ", bitmap.getBounds().height：" +  bitmap.getBounds().height+ "<br>" +
                "bitmap.getTransformedBounds().width：" +  Math.floor(bitmap.getTransformedBounds().width) + ", bitmap.getTransformedBounds().height：" + Math.floor(bitmap.getTransformedBounds().height);
        }

        /**
         * リサイズのイベント処理
         */
        private resizeHandler():void {
            let windowWidth:number = window.innerWidth;
            let windowHeight:number = window.innerHeight;
            // ステージのサイズをwindowのサイズに変更
            this._canvas.width = windowWidth;
            this._canvas.height = windowHeight;
        }


        /**
         * Tick Handler
         */
        private tickeHandler(event):void {
            if (!event.paused)
                this._stage.update();
        }


    }
}

window.addEventListener("load", (event)=> {
    let main:project.ImageBounds = new project.ImageBounds();
    main.init();
});



