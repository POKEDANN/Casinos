var diceForms = [
    '&#9856;', '&#9857;',
    '&#9858;', '&#9859;',
    '&#9860;', '&#9861;'
];

var diceTagHtml = null; //esta muestra el dado actual en el html
var interval = null; //referencia para saber si un dado se esta moviendo y saber que proceso detener
var diceFace = 0; //cara del dado, inicia en 0 por el arreglo de diceForms
var actualDice = 0;  //te dice el dado actual, obtenidos por la clase dice
var tagDices = null; //cada clase dice la guarda aqui y la muestra

alert("Bienvenido a casinopolis");
var apuesta = prompt("Por favor, escribe tu apuesta");
alert("Da clic en el primer dado para comenzar el juego");

function showNewDice() {
    diceFace = Math.floor(Math.random()*6); //obtener cara de dado random
    diceTagHtml.innerHTML = diceForms[diceFace]; //dibuja la cara obtenida
}

function getDiceResult() {
    if ((diceFace + 1) % 2 == 0) { //obtiene el modulo del numero obtenido, si el resultado es 0 es par
        return "Felicidades, va el tiro: " + (actualDice + 2); //regresa el texto si es par, a actualDice se le suma 2 por la posicion del dado que sigue
    } else {
        return "El juego ha terminado, suerte para la proxima, tomate una coca"; //si es impar regresa otro texto
    }
}

function start() { //lo que ejecutara cuando el dado esta moviendose
    interval = setInterval(function() { //esto es una funcion anonima
        showNewDice()
    }, 100); //cuanto tiene que esperar para ejecutar cada funcion
}

function stop() { //detiene al dado
    clearInterval(interval); //limpia el intervalo
    interval = null; //lo vuelve nulo para la comprobacion que sigue
    alert(getDiceResult()); //enseña el resultado del dado apretado
}

function doOnClick() { //lo que hara en el clic
    if (interval == null) { //si interval es nulo ejecuta start
        start();
    } else {
        stop(); //si no es nulo lo detiene
        actualDice += 1; //actualDice++ o actualDice=actualDice+1 muestra el dado actual, se le suma uno por la posicion que tiene, para la maquina es 0 pero para mi humano es 1
        init(); //inicializa de nuevo
    }
}

function init(){ //lo que hara al iniciar
    if (actualDice < tagDices.length) { //checa cuantos dados hay, checa mi dado actual y si hay otro mas despues de las acciones anteriores me muestra el nuevo
        tagDices[actualDice].style.display="block"; //pinta el dado actual, tambien muestra el dado nuevo hasta que el anterior ya termino
        diceTagHtml = tagDices[actualDice].querySelector(".dice");
        showNewDice();
        diceTagHtml.onclick = function() {
            doOnClick();
        };
    } else {
        alert("El juego ha terminado, gracias por participar");
    }
}

window.onload = function() { //lo que carga al principio
    tagDices = document.getElementsByClassName("ayuda"); //solo muestra las clases divDado
    init();
}