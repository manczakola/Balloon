class Anim {
    constructor(selector) {
        this.elements = [...document.querySelectorAll(selector)];

    }
    listenCursorMove(event) {
        const clientX = event.clientX;
        const clientY = event.clientY;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        const posX = clientX - centerX;
        const posY = clientY - centerY;

        this.elements.forEach(el => {
            this.moveElement(el, posX, posY)
        })
    }
    moveElement(el, posX, posY) {

        const ratioX = el.attributes[2].value;
        const ratioY = el.attributes[3].value;
        const moveX = posX * ratioX;
        const moveY = posY * ratioY;

        el.style.transform = `translate(${moveX}px,${moveY}px)`;
    }
}