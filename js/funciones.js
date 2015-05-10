var nombres = ["BBVA", "EDIFICIO RIOLINDO", "LAB. ETICOS","LASCA","TEATRO MUNICIPAL","EDIFICIO TIGO","VIVIENDAS","OBRAS VARIAS"];

function cambiarFondo(nombreImagen1){
	
	
	
	//alert(nombreImagen);
	//document.body.style.backgroundImage = "url('http://supergifs.net/imagenes/musica/gunsnrosesbandwallpaper.jpg')";
	//document.getElementById('portfolio').style.background='#CCCCCC';
	document.getElementById('elegido').style.backgroundImage = "url('images/obras1/portfolio/modals/m-"+nombreImagen1+".jpg')";
	document.getElementById('portfolio').style.backgroundPosition = "";
	document.getElementById("elegido").style.visibility = "visible";
	document.getElementById('portfolio').className = 'oscurecer';	
	document.getElementById('portfolio-wrapper').className = 'gal3';
	document.getElementById("titulo").innerHTML = nombres[nombreImagen1-1];
	

	
	
	
	
}

function colorNormal(){
	
	//document.getElementById('portfolio').style.background='white';

	document.getElementById('portfolio').style.backgroundImage = "url('images/patterns/grey.png')";
	document.getElementById("elegido").style.visibility = "hidden";
	document.getElementById('portfolio').className = '';	
	document.getElementById('portfolio-wrapper').className = 'gal4';	
	document.getElementById("titulo").innerHTML = "PROYECTO FB";
	

}