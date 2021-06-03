var seg = 0;
var min = 0;
var select = false;
var id = null;
var aciertos = 0;
var errores = 0;
var objetos = [];

a = setInterval(sumarTiempo, 1000);



function sumarTiempo() {
	if (seg < 59) {
		seg++;
	} else {
		min++;
		seg = 0;
	}
	showTime("tiempo");
}

function obj(id, select) {
	this.id = id;
	this.select = select;
}

function cambiaColor(x) {
	x.style.background = "rgba(100, 149, 237, 0.2)";
	x.style.pointerEvents = "none";
	var objeto = new obj(x.id, select = true);
	objetos.push(objeto);
	if (x.id === "frt5") {
		aciertos++;
		document.getElementById("puntos").innerHTML = "<b>PUNTOS: " + aciertos
				+ "/4</b>   ";
	}
	if (x.id !== "frt5") {
		errores++;
	}
 }
	
function pausarConteo() {
	clearInterval(a);
	if (aciertos === 4 && errores === 0) {
		document.getElementById("puntaje").innerHTML = "<b>¡NIVEL COMPLETADO!</b>";
	} else {
		if (aciertos === 0 && errores === 0) {
			document.getElementById("puntaje2").innerHTML = "<b>¡VUELVE A INTENTARLO!</b>";
		}
		if (aciertos >= 0 && errores >= 0) {
			document.getElementById("puntaje2").innerHTML = "<b>¡VUELVE A INTENTARLO!</b>";
		}
	}
	// tiempo
	showTime("time");
	
	document.getElementById("aciertos").innerHTML = "<b>ACIERTOS: " + aciertos
			+ "</b>";
	document.getElementById("errores").innerHTML = "<b>ERRORES: " + errores
			+ "</b>";
}

function showTime(id){
	if (seg < 10 && min < 10) {
		document.getElementById(id).innerHTML = "<b>TIEMPO 0" + min
				+ ":0" + seg + "</b>";
	}
	if (seg >= 10 && min >= 10) {
		document.getElementById(id).innerHTML = "<b>TIEMPO " + min + ":"
				+ seg + "</b>";
	}
	if (seg < 10 && min >= 10) {
		document.getElementById(id).innerHTML = "<b>TIEMPO " + min + ":0"
				+ seg + "</b>";
	}
	if (seg >= 10 && min < 10) {
		document.getElementById(id).innerHTML = "<b>TIEMPO 0" + min + ":"
				+ seg + "</b>";
	}	
}
