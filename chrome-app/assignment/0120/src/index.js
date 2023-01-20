const body = document.querySelector("body");

function hadleWindowResize() {
    if(window.innerWidth > 1000) {
        body.classList.add("yellow");
    } else if (window.innerWidth > 800) {
        body.classList.remove("yellow");
        body.classList.add("purple");
    } else {
        body.classList.remove("yellow");
        body.classList.remove("purple");
    }

window.addEventListener("resize", hadleWindowResize);