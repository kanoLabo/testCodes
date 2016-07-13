// Load Images
window.addEventListener("DOMContentLoaded", function () {
    var elements = document.getElementsByTagName("source");
    for (var i = 0; i < elements.length; i++) {
        new Image().src = elements[i].getAttribute("srcset");
    }
});
//# sourceMappingURL=script.js.map