window.onload = update;

var xmlhttp;


function update(){

	xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = statechange;
	xmlhttp.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=London&APPID=c6331badce9c725318e21ae37054570f&units=metric", true);
	xmlhttp.send();


	


}


function statechange(){
	if (xmlhttp.readyState === 4 && xmlhttp.status ===200) {
		var info = JSON.parse(xmlhttp.responseText);
		for (var i = 0; i < info.weather.length; i++) {
			var display = "Været i London" + JSON.stringify(info.weather[i].main);
			console.log(JSON.stringify(info.weather[i].main));
		}
		
		document.getElementById("data").innerHTML = display;
		
	}
}


