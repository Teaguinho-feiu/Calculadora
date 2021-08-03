// @teaguinho_feiu segue la patrão
function text(resp, qual) {
	document.getElementById("resposta").innerHTML = "O resultado é: " + resp + qual;
}
	function conta(tipo) {
	var a = parseFloat(prompt("insira o valor a"));
	if (isNaN(a)) {
		alert("Insira um valor valido");
		conta(tipo);
	} else {
		var b = parseFloat(prompt("Insira o valor b"))
		if (isNaN(b)) {
			alert("Insira um valor valido");
			conta(tipo);
		} else {
			var rer = 0;
			if (tipo == "mais") {
				res = a + b;
				text("res", "");
			} else if (tipo == "menos") {
				res = a - b;
				text("res", "");
			} else if (tipo == "vezes") {
				res = a * b;				
			} else {
				res = a / b;
				text("res", "");
			}
			var zero = document.getElementById("valorZero");
			if (res == 0) {
				zero.innerHTML = "O resultado deu igual a 0";
			} else if (res > 0) {
				zero.innerHTML = "O resultado deu maior que 0";
			} else {
				zero.innerHTML = "O resultado deu menor que 0";
			}
		}
	}
}
function baskara() {
	var a = parseFloat(prompt("insira o valor a"));
	var b = parseFloat(prompt("insira o valor b"));
	var c = parseFloat(prompt("insira o valor c"));
}
function forcaMassaAceleracao() {
	var qual = parseFloat(prompt("calcular 1-newtons ou 2-aceleração?"));
	if (qual == 1) {
		var m = parseFloat(prompt("insira a massa em kg"));
		var a = parseFloat(prompt("insira a aceleração em m/s²"));
		var n = m * a;
		text(n, " Newtons");
	} else if (qual == 2) {
		var m = parseFloat(prompt("insira a massa em kg"));
		var f1 = parseFloat(prompt("insira a força 1 em N"));
		var f2 = parseFloat(prompt("insira a força 2 em N"));
		var f = f1 - f2;
		var res = f / m;
		text(res, " m/s²");
	}
}
// Nesse codigo eu me superei pqp olha o tamanho