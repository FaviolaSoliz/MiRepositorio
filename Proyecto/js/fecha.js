var fecha_actual = new Date();

var dia=fecha_actual.getDate();
var mes=fecha_actual.getMonth()+1;
var anio=fecha_actual.getFullYear();

var hora=fecha_actual.getHours();
var min=fecha_actual.getMinutes();
var seg=fecha_actual.getSeconds();


/*var month = new Array ("Enero","Febrero","Marzo","Abril","Mayo",
"Junio","Julio","Agosto","Septiembre","Octobre","Novimbre","Diciembre");
var dayofweek = new Array("Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado");

*/
document.write(dia+' / '+mes+' / '+anio + '  '+hora+':'+min+':'+seg);