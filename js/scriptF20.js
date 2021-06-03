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

	
function pausarConteo() {
	clearInterval(a);
	var inp1 = document.getElementById("input1").value;
	var inp2 = document.getElementById("input2").value;
	var inp3 = document.getElementById("input3").value;
	var inp4 = document.getElementById("input4").value;
	var inp5 = document.getElementById("input5").value;
	var inp6 = document.getElementById("input6").value;
	var inp7 = document.getElementById("input7").value;
	var inp8 = document.getElementById("input8").value;
	
	if(inp1 === "value1") {aciertos++;}
	else{errores++;
	document.getElementById("error1").innerHTML = "<b>X</b>";
	}
	if(inp2 === "value2") {aciertos++;}
	else{errores++;
	document.getElementById("error2").innerHTML = "<b>X</b>";}
	if(inp3 === "value4") {aciertos++;}
	else{errores++;
	document.getElementById("error3").innerHTML = "<b>X</b>";}
	if(inp4 === "value5") {aciertos++;}
	else{errores++;
	document.getElementById("error4").innerHTML = "<b>X</b>";}
	if(inp5 === "value8") {aciertos++;}
	else{errores++;
	document.getElementById("error5").innerHTML = "<b>X</b>";}
	if(inp6 === "value6") {aciertos++;}
	else{errores++;
	document.getElementById("error6").innerHTML = "<b>X</b>";}
	if(inp7 === "value3") {aciertos++;}
	else{errores++;
	document.getElementById("error7").innerHTML = "<b>X</b>";}
	if(inp8 === "value7") {aciertos++;}
	else{errores++;
	document.getElementById("error8").innerHTML = "<b>X</b>";}
	
	
	if (aciertos === 8 && errores === 0) {
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
