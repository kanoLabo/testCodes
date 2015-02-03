define(["require", "exports", "./hoge"], function (require, exports, hogeModule) {
    var Main = (function () {
        function Main() {
            var hoge = new hogeModule.Hoge();
            hoge.sayHello();
        }
        return Main;
    })();
    new Main();
});
//# sourceMappingURL=main.js.map