
function myFuncionDyspalyyText(imgs,TestoDaMostrare,descColore) {
	 
	 console.log(TestoDaMostrare);
	 
	var Testo01 = document.getElementById("Testo01"); 
	if (TestoDaMostrare=='Testo01') {
		console.log('Testo1:si');
		Testo01.style.display="block";
	} else {
		console.log('Testo1:no');
		Testo01.style.display="none";
	}
	 
			 
	var Testo02 = document.getElementById("Testo02"); 
	if (TestoDaMostrare=='Testo02') {
		console.log('Testo2:si');
		Testo02.style.display="block";
	} else {
		console.log('Testo2:no');
		Testo02.style.display="none";
	}
	 
	 
			 
	var Testo03 = document.getElementById("Testo03"); 
	if (TestoDaMostrare=='Testo03') {
		console.log('Testo3:si');
		Testo03.style.display="block";
	} else {
		console.log('Testo3:no');
		Testo03.style.display="none";
	}
	 
	 
			 
	var Testo04 = document.getElementById("Testo04"); 
	if (TestoDaMostrare=='Testo04') {
		console.log('Testo4:si');
		Testo04.style.display="block";
	} else {
		console.log('Testo04:no');
		Testo04.style.display="none";
	}
	
		 
			 
	var Ciocche = document.getElementById("Ciocche"); 
	if (TestoDaMostrare=='Ciocche') {
		console.log('Ciocche:si');
		Ciocche.style.display="block";
		var codColore =  document.getElementById("CodiceColore");
		codColore.innerText = descColore;
	} else {
		console.log('Ciocche:no');
		Ciocche.style.display="none";
	}
	 
	var immagineGrande = document.getElementById("expandedImg");
 
	
	immagineGrande.src = imgs ;

	
	immagineGrande.parentElement.style.display="block";
}
