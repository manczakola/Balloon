document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('.anim-bg', '.anim-bg--balloon');

    document.addEventListener('mousemove', function (event) {

        const clientX = event.clientX;
        const clientY = event.clientY;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        elements.forEach(element => {
            const ratioX = element.getAttribute('ratioX');
            const ratioY = element.getAttribute('ratioY');

            const moveX = (clientX - centerX) * ratioX;
            const moveY = (clientY - centerY) * ratioY;

            element.style.transform = `translate(${moveX}px,${moveY}px)`;

        })
    })
})