//aqui empieza el casino
alert("Bienvenido a Casinito");
var apuesta = prompt("Escribe tu apuesta");
function numeroRandom(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
var dadoUno = numeroRandom(1,6);
alert("el dadoUno salio " + dadoUno);
if(dadoUno % 2 === 0){
	alert("felicidades, va el segundo tiro");
	var dadoDos = numeroRandom(1,6);
	alert("el dadoDos salio " + dadoDos);
	var resultado = apuesta * (dadoDos * dadoUno);
	alert("tu apuesta ahora es: " + resultado);
} else {
	alert("El juego ha terminado, suerte para la proxima, tomate una coca");
}
//aqui acaba el casino