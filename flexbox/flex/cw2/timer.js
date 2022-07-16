function odliczanie()
{
	var dzisiaj= new Date();
	
	var dzien = dzisiaj.getDate();
	
	var miesiac= dzisiaj.getMonth() +1; 
	if (miesiac<10) miesiac= "0"+miesiac;
	
	var rok= dzisiaj.getFullYear();
	
	var godzina= dzisiaj.getHours();
	
	var minuta= dzisiaj.getMinutes();
	
	var sekunda= dzisiaj.getSeconds();
	
	
	document.getElementById("zegar").innerHTML= dzien +"/" + miesiac + "/" + rok + "  </br>" + 
	godzina + ":" + minuta + ":" + sekunda
	
	setTimeout("odliczanie()", 1000);
}