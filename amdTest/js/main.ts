import hogeModule = require("./hoge");
class Main {
    constructor() {
        var hoge:hogeModule.Hoge = new hogeModule.Hoge();
        hoge.sayHello();
    }
}
new Main();
