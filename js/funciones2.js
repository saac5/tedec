


var nombres = ["AUTOPISTA", "BANCO FAMILIAR", "EDIFICIO BBVA","EDIFICIO CONCORDIA","EDIFICIO DOMINICANA","EDIFICIO GRANADA","EDIFICIO MOTTA","NSA LOGISTICA"];
var descripcion = ["•	CARACTERISTICAS: Edificio Corporativo  •	EJECUCIÓN: •	UBICACIÓN: ","•	CARACTERISTICAS: BANCO  •	EJECUCIÓN: •	UBICACIÓN: ","•	CARACTERISTICAS: BANCO  •	EJECUCIÓN: •	UBICACIÓN: ","•	CARACTERISTICAS: Edificio de Departamentos  •	EJECUCIÓN: •	UBICACIÓN: ","•	CARACTERISTICAS: Edificio de Departamentos  •	EJECUCIÓN: •	UBICACIÓN: ","•	CARACTERISTICAS: Edificio de Departamentos  •	EJECUCIÓN: •	UBICACIÓN: ","•	CARACTERISTICAS: Vivienda Unifamiliar   •	EJECUCIÓN: •	UBICACIÓN: ","•	CARACTERISTICAS: Edificio Corporativo  •	EJECUCIÓN: •	UBICACIÓN: ",]
/*ARRIBA TU VECTOR DE DESCRIPCION*/


function cambiarFondo(nombreImagen1){
	
	
	
	//alert(nombreImagen);
	//document.body.style.backgroundImage = "url('http://supergifs.net/imagenes/musica/gunsnrosesbandwallpaper.jpg')";
	//document.getElementById('portfolio').style.background='#CCCCCC';
	document.getElementById('elegido').style.backgroundImage = "url('images/obras2/portfolio/modals/m-"+nombreImagen1+".jpg')";
	document.getElementById('portfolio').style.backgroundPosition = "";
	document.getElementById("elegido").style.visibility = "visible";
	document.getElementById('portfolio').className = 'oscurecer';	
	document.getElementById('portfolio-wrapper').className = 'gal3';
	document.getElementById("titulo").innerHTML = nombres[nombreImagen1-1];
	document.getElementById("descripcion").innerHTML = descripcion[nombreImagen1-1];

	$('.textoSlider2').height(140);
	//$(".gal").attr("src","images/obras1/portfolio/gris.jpg");
	$('.gal').hide();
	$('.gris').show();



	
	
	
	
}

function colorNormal(){
	
	//document.getElementById('portfolio').style.background='white';

	document.getElementById('portfolio').style.backgroundImage = "url('images/patterns/grey.png')";
	document.getElementById("elegido").style.visibility = "hidden";
	document.getElementById('portfolio').className = '';	
	document.getElementById('portfolio-wrapper').className = 'gal4';	
	document.getElementById("titulo").innerHTML = "OBRAS CULMINADAS";
	$('.textoSlider2').height(45);
	document.getElementById("descripcion").innerHTML = '';
	$('.gal').show();
	$('.gris').hide();



}