
var diceForms = [
    '&#9856;', '&#9857;',
    '&#9858;', '&#9859;',
    '&#9860;', '&#9861;'
];
var diceTagHtml = null;
var interval = null;
var diceFace = 0;
var actualDice = 0;
var tagDices = null;

function showNewDice() {
    diceFace = Math.floor(Math.random()*6);
    diceTagHtml.innerHTML = diceForms[diceFace];
}

function getDiceResult() {
    if ((diceFace + 1) % 2 == 0) {
        return "Felicidades, va el tiro: " + (actualDice + 2);
    } else {
        return "El juego ha terminado, suerte para la proxima, tomate una coca";
    }
}

function start() {
    interval = setInterval(function() {
        showNewDice()
    }, 100);
}

function stop() {
    clearInterval(interval);
    interval = null;
    alert(getDiceResult());
}

function doOnClick() {
    if (interval == null) {
        start();
    } else {
        stop();
        actualDice += 1;
        init();
    }
}

function init(){
    if (actualDice < tagDices.length) {
        diceTagHtml = tagDices[actualDice];
        showNewDice();
        diceTagHtml.onclick = function() {
            doOnClick();
        };
    } else {
        alert("No existen más dados");
    }
}

window.onload = function() {
    tagDices = document.getElementsByClassName("dice");

    init();
}