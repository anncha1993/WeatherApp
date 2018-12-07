window.onload = update;

var xmlhttp;


function update(){

	xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = statechange;
	xmlhttp.open("GET", "http://api.openweathermap.org/data/2.5/group?id=2643743,6453366,764679&APPID=c6331badce9c725318e21ae37054570f&units=metric", true);
	xmlhttp.send();


	


}


function statechange(){
	if (xmlhttp.readyState === 4 && xmlhttp.status ===200) {
		var info = JSON.parse(xmlhttp.responseText);
		for (var i = 0; i < info.list.length; i++) {
			var london = "<div class='london'>" + info.list[0].name; + "</div>"; 
			var oslo = "<div class='oslo'>" + info.list[1].name; + "</div>"; 
			var minsk = "<div class='minsk'>" + info.list[2].name; + "</div>"; 

			console.log(JSON.stringify(info.list[1]));
		}
		
		document.getElementById("data").innerHTML = london + oslo + minsk;
		
	}
}


		//	var display = "<div class='prog'> City: "+ JSON.stringify(info.name) + "</br> Weather: " 
		//	+  JSON.stringify(info.weather[i].main) + "</br> <img src='"+ JSON.stringify(info.weather.icon) + ".png'";