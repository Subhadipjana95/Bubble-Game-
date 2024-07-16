var timer = 60;
var score = 0;
var hitRn = 0;


function getNewHit() {
    hitRn = Math.floor(Math.random() * 10);
    document.querySelector("#hit-val").textContent = hitRn;
}
function runTimer() {
    var timeInt = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timer-val").textContent = timer;
        }
        else {
            clearInterval(timeInt)
            document.querySelector("#panel").innerHTML = `<h3>Game Over </h3> 
           <h1>Your Score is ${score}</h1>
           <button>Restart</button>`;
            loadGame()
        }
    }, 1000)
}
function loadGame() {
    document.querySelector("#panel button").addEventListener("click", function () {
        location.reload();
    })
}
function getScore() {
    score += 10;
    document.querySelector("#scr-val").textContent = score;
}
function makeBubble() {
    var clutter = "";
    for (var i = 1; i <= 136; i++) {
        var rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`;
    }
    for (var i = 1; i <= 40; i++) {
        var rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble1">${rn}</div>`;
    }

    document.querySelector("#pan-bottom").innerHTML = clutter;
}

document.querySelector("#pan-bottom").addEventListener("click", function (dets) {
    var clickedNum = Number(dets.target.textContent);
    if (clickedNum === hitRn) {
        getScore()
        makeBubble()
        getNewHit()
    }
})

getNewHit()
runTimer()
makeBubble()




