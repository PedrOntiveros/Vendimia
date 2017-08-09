var iniciaApp = function () {

	//poner la fecha del día
	$("#fecha").html("Fecha: "+fechaActual());
	
	//Declaracion de eventos
	$("#btnInicio").on('click',muestraMenu);
	$("#btnVentas").on('click',muestraVentas);
	$("#btnCliente").on('click',muestrClientes);
	$("#btnArticulos").on('click',muestrArticulos);
	$("#btnConfiguracion").on('click',muestrConfig);
}

$(document).ready(function(){
	iniciaApp();
});


//Function to show the submenu of Incio
var muestraMenu = function () {
	$("#submenu").attr('class', 'class=submenu-contenido show');
}
var muestraVentas = function () {
	
}
var muestrArticulos = function () {
	
}
var muestrClientes = function () {
	$("#clientes").show();
}
var muestrConfig = function () {
	$("#submenu").attr('class', 'class=submenu-contenido show');
}

//funcion para obtener la fecha del día
var fechaActual = function () {
	var d = new Date();
	var dia = d.getDate();
	var mes = d.getMonth()+1;
	if(dia < 10){
		dia = "0"+dia;
	}
	if(mes < 10){
		mes = "0"+mes;
	}
	var fecha = dia+"/"+mes+"/"+d.getFullYear();
	return fecha;
}