// Load Images
window.addEventListener("DOMContentLoaded", () => {
	const elements = document.getElementsByTagName("source");
	for (let i:number = 0; i < elements.length; i++) {
		new Image().src = elements[i].getAttribute("srcset");
	}
}
