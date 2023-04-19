var numero="";
var memoria_1=0;
var memoria_2=0;
function display(valor){
	numero=numero+valor;
	document.getElementById("pantalla").value=numero;
}
function clr(){
	numero="";
	document.getElementById("pantalla").value="";
	memoria_1=0;
	memoria_2=0;	
}
function sumar(){
	memoria_2=parseFloat(document.getElementById("pantalla").value);
	document.getElementById("pantalla").value=memoria_1+memoria_2;
}
function restar(){
	memoria_2=parseFloat(document.getElementById("pantalla").value);
	document.getElementById("pantalla").value=memoria_1-memoria_2;
}
function multiplicar(){
	memoria_2=parseFloat(document.getElementById("pantalla").value);
	document.getElementById("pantalla").value=memoria_1*memoria_2;
}
function dividir(){
	memoria_2=parseFloat(document.getElementById("pantalla").value);
	document.getElementById("pantalla").value=memoria_1/memoria_2;
}
function modulo(){
	memoria_2=parseFloat(document.getElementById("pantalla").value);
	document.getElementById("pantalla").value=memoria_1%memoria_2;
}
function igual(){
	memoria_1=parseFloat(document.getElementById("pantalla").value);
	numero="";
	document.getElementById("pantalla").value="";
}