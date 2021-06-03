var seg = 0;
var min = 0;
var aciertos = 0;
var errores = 0;

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

function cambiaColor(x) {
	x.style.background = "rgba(100, 149, 237, 0.2)";
	x.style.pointerEvents = "none";
	if (x.id === "item21-3") {
		aciertos++;
	}
	if (x.id !== "item21-3") {
		errores++;
	}
 }

function pausarConteo() {
	clearInterval(a);
	
	if (aciertos === 1 && errores === 0) {
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
