document.addEventListener('touchmove', (e) => {
    const elements = document.querySelectorAll('.anim-bg')

    const clientX = e.touches[0].clientX;
    const clientY = e.touches[0].clientY;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;


    const posX = clientX - centerX;
    const posY = clientY - centerY;


    elements.forEach(el => {
        const ratioX = el.attributes[2].value;
        const ratioY = el.attributes[3].value;
        const moveX = posX * ratioX;
        const moveY = posY * ratioY;

        el.style.transform = `translate(${moveX}px,${moveY}px)`;
    })




})