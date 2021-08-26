// fecha actual dinámicamente en el siguiente formato de fecha: lunes 6 de abril de 2020

var mes = nueva matriz ("enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "Diciembre");
var dayofweek = nueva matriz ("domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado");
var d = nueva Fecha ();
document.write (dayofweek [d.getDay ()] + "," + d.getDate () + "" + mes [d.getMonth ()] + "" + d.getFullYear ());