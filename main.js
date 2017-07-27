var dice;
var diceDos;
var dices = ['&#9856;', '&#9857;', '&#9858;', '&#9859;', '&#9860;', '&#9861;' ];
var dicess = ['&#9861;','&#9860;','&#9859;','&#9858;','&#9857;','&#9856;' ];
var stopped = true;
var t;
// var casino = alert("Bienvenido a Casinopolis");
// var apuesta = prompt("Escribe tu apuesta");

function change() {
  var random = Math.floor(Math.random()*6);
  dice.innerHTML = dices[random];
  diceDos.innerHTML = dicess[random];
}

function stopstart() {
  var random = Math.floor(Math.random()*6);
  if(dices[random] == '&#9857;' || dices[random] == '&#9859;' || dices[random] == '&#9861;'){
    alert("felicidades, va el segundo tiro");
  } else {
    alert("El juego ha terminado, suerte para la proxima, tomate una coca");
  } 

  if(stopped) {
    stopped = false;
    t = setInterval(change, 100); 
  } else {
    clearInterval(t);
    stopped = true;
  }  
}

window.onload = function() {
  dice = document.getElementById("dice");
  diceDos = document.getElementById("diceDos");
  stopstart(); 
}

// var dadoUno = numeroRandom(1,6);
// alert("el dadoUno salio " + dadoUno);
// if(dadoUno == 2 || dadoUno == 4 || dadoUno == 6){
//   alert("felicidades, va el segundo tiro");
//   var dadoDos = numeroRandom(1,6);
//   alert("el dadoDos salio " + dadoDos);
//   var resultado = apuesta * (dadoDos * dadoUno);
//   alert("tu apuesta ahora es: " + resultado);
// } else {
//   alert("El juego ha terminado, suerte para la proxima, tomate una coca");
// }