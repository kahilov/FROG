const froger = Froger()
const renderer = Renderer()

let timeLeft = 2
$("#start").on("click", function () {
    let intervalId = setInterval(function () {
        timeLeft--
        renderer.renderTime()
        if (timeLeft == 0) {
            clearInterval(intervalId)
            alert("Game Over");
        }
    }, 2000);
    renderer.renderTime()
    froger.newLevel()
    renderer.renderGame(froger.getGameData())
})

$("#frogs").on("click", ".frog", function () {
    bye = $(this).data().id
    froger.removeFrog(bye)
    renderer.renderGame(froger.getGameData())
})
