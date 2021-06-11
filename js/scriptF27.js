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




//function cambiaColor(x) {
//	x.style.background = "rgba(100, 149, 237, 0.2)";
//	x.style.boxShadow = '0 0 10px #44f';
//	x.style.pointerEvents = "none";
//	if (x.id === "item23-3"||x.id === "item23-9") {
//		aciertos++;
//	} else {
//		errores++;
//	}
//}


function dragstart(caja, event) {
	// el elemento a arrastrar
	event.dataTransfer.setData('Data', caja.id);
}

function drag(target, event) {
	console.log("drag");
	return false;
}

function dragend(target, event) {
	console.log("dragend");
	return false;
}

function dragenter(target, event) {
	console.log("dragenter");
	return false;
}

function dragleave(target, event) {
	console.log("dragleave");
	return false;
}

function dragover(event) {
	console.log("dragover");
	event.preventDefault();
	return false;
}

function drop(target, event) {
	// obtenemos los datos
	var caja = event.dataTransfer.getData('Data');
	// agregamos el elemento de arrastre al contenedor
	target.appendChild(document.getElementById(caja));
}





function pausarConteo() {
	clearInterval(a);

	if (aciertos === 2 && errores === 0) {
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

function showTime(id) {
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
