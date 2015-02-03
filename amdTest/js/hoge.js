define(["require", "exports"], function (require, exports) {
    var Hoge = (function () {
        function Hoge() {
        }
        Hoge.prototype.sayHello = function () {
            console.log("ディ・モールト！");
        };
        return Hoge;
    })();
    exports.Hoge = Hoge;
});
//# sourceMappingURL=hoge.js.map