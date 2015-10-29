/// <reference path="../typings/easeljs/easeljs.d.ts" />
/// <reference path="../typings/preloadjs/preloadjs.d.ts" />
var project;
(function (project) {
    var ImageBounds = (function () {
        function ImageBounds() {
            var _this = this;
            // ステージを準備
            this._canvas = document.getElementById("myCanvas");
            this._stage = new createjs.Stage(this._canvas);
            // Tickerを作成
            createjs.Ticker.timingMode = createjs.Ticker.RAF;
            createjs.Ticker.addEventListener("tick", function (event) { return _this.tickeHandler(event); });
            // リサイズイベント
            this.resizeHandler();
            window.addEventListener("resize", function () { return _this.resizeHandler(); });
        }
        ImageBounds.prototype.init = function () {
            var _this = this;
            var queue = new createjs.LoadQueue();
            queue.addEventListener("fileload", function (e) { return _this._loadCompleteHandler(e); });
            queue.loadFile({ src: "images/image.jpg" });
        };
        ImageBounds.prototype._loadCompleteHandler = function (event) {
            var bitmap = new createjs.Bitmap(event.result);
            bitmap.rotation = 20;
            this._stage.addChild(bitmap);
            document.getElementById("contentsInfo").innerHTML =
                "bitmap.image.width：" + bitmap.image.width + ", bitmap.image.height：" + bitmap.image.height + "<br>" +
                    "bitmap.getBounds().width：" + bitmap.getBounds().width + ", bitmap.getBounds().height：" + bitmap.getBounds().height + "<br>" +
                    "bitmap.getTransformedBounds().width：" + Math.floor(bitmap.getTransformedBounds().width) + ", bitmap.getTransformedBounds().height：" + Math.floor(bitmap.getTransformedBounds().height);
        };
        /**
         * リサイズのイベント処理
         */
        ImageBounds.prototype.resizeHandler = function () {
            var windowWidth = window.innerWidth;
            var windowHeight = window.innerHeight;
            // ステージのサイズをwindowのサイズに変更
            this._canvas.width = windowWidth;
            this._canvas.height = windowHeight;
        };
        /**
         * Tick Handler
         */
        ImageBounds.prototype.tickeHandler = function (event) {
            if (!event.paused)
                this._stage.update();
        };
        return ImageBounds;
    })();
    project.ImageBounds = ImageBounds;
})(project || (project = {}));
window.addEventListener("load", function (event) {
    var main = new project.ImageBounds();
    main.init();
});
//# sourceMappingURL=bitmapSizeTest.js.maps.map