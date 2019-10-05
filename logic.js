const Froger = function () {
    let frogs = []
    let levelNum = 0

    const newLevel = function () {
        timeLeft= timeLeft+1
        levelNum++
        for(i = 0; i < levelNum; i++ ) {
            const newFrog = {}
            newFrog.num = levelNum
            frogs.push(newFrog)
        }
        randomizeFrogs()
    }
    const removeFrog = function (frogNum) {
        for (n in frogs){
            if(frogNum==frogs[n].num){
                frogs.splice(n,1)
                break;
            }
        }
        randomizeFrogs()
        if(frogs.length==0){
            newLevel()
        }
    }
    const randomizeFrogs = function(){
        for(frog of frogs){
            frog.color = '#' + (Math.random() * 0xFFFFFF << 0).toString(16)
            frog.size = ((Math.random()*100) + 50).toFixed();
            frog.positionX = (Math.random() * ($(document).width() - frog.size)).toFixed();
            frog.positionY = (Math.random() * ($(document).height() - frog.size)).toFixed();
        }
    }
    const getGameData = function (){
        return {
            frogs: frogs,
            levelNum:levelNum
        }
    }
    return {
        getGameData:getGameData,
        newLevel:newLevel,
        removeFrog:removeFrog,
    }
}
