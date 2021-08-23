function sumar(numero1, numero2){
	var num1 = parseFloat(document.getElementById('numero1').value);
	var num2 = parseFloat(document.getElementById('numero2').value);
	var resultado1 = num1 + num2;

	document.getElementById('resultado').value = resultado1;
}