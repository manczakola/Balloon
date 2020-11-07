document.addEventListener('DOMContentLoaded', function () {
    const anim = new Anim('.anim-bg');


    document.addEventListener('mousemove', (e) => {
        anim.listenCursorMove(e)
    })
})