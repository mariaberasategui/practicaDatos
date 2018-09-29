function leerTASA() {
    villagesTR = document.getElementsByTagName('table')[0].getElementsByTagName('tr')
    str= "[";
    for (i=10;i<villagesTR.length;i++) {
	  año = villagesTR[i].children[0].textContent;
      grupo1 = villagesTR[i].children[4].textContent.replace(',','.');
      grupo2  = villagesTR[i].children[7].textContent.replace(',','.');
	  grupo3  = villagesTR[i].children[10].textContent.replace(',','.');
      str += "['" + año
	  str += "'," + grupo1
	  str += "," + grupo2
	  str += "," + grupo3
	  
      str += "]"
	  
	  if (i<villagesTR.length-1)
	  str += ","
	  str += "\n"
	  
    }

    return str;
}
