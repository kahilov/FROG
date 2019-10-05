const Renderer = function () {
    const renderGame = function (gameData) {
        $("#frogs").empty();
        for (frog of gameData.frogs) {
            elem_frog = $("<div data-id=" + frog.num + " id =frog" + frog.num + " class=\"frog\"></div>")
            elem_i = $("<i class=\"fas fa-frog\"></i>")
            elem_i.css({
                'font-size': frog.size +"px",
                'color': frog.color,
                'position':'absolute',
                'left':frog.positionX+'px',
                'top':frog.positionY+'px',
            })
            $("#frogs").append(elem_frog)
            $("#frog" + frog.num).append(elem_i)
        }
        $("#fleft").text(gameData.frogs.length + " frogs left")
        $("#level").text("Level " + gameData.levelNum)
    }
    const renderTime = function(){
        $("#counter").text(timeLeft + " Seconds Left")
    }
    return {
        renderGame: renderGame,
        renderTime: renderTime
    }
}