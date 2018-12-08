window.onload = update;
var xmlhttp;
function update(){

	xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = statechange;
	xmlhttp.open("GET", "http://api.openweathermap.org/data/2.5/group?id=2643743,6453366,764679&APPID=c6331badce9c725318e21ae37054570f&units=metric", true);
	xmlhttp.send();

	updatePage();

}

function statechange(){
	if (xmlhttp.readyState === 4 && xmlhttp.status ===200) {
		var info = JSON.parse(xmlhttp.responseText);
		for (var i = 0; i < info.list.length; i++) {
			var london = "<ul> <li class='city'>" + info.list[0].name + "</li>" + "<li class='weather'>" + info.list[0].weather[0].main + " </li>"
			+ "<li><img src='http://openweathermap.org/img/w/" + info.list[0].weather[0].icon + ".png'/></li>" + "<li class='temp'>" + info.list[0].main.temp +"C" + "</li> </ul>";
			
			var oslo = "<ul> <li class='oslo'>" + info.list[1].name; + "</li>" + "<li class='weather'>" + info.list[1].weather[0].main + "</li>" + "<li><img src='http://openweathermap.org/img/w/" + info.list[1].weather[0].icon + ".png'/> </li>" 
			+ "<li class='temp'>" + info.list[1].main.temp +"C" + "</li></ul>" ; 
		
			
	
			
			var minsk = "<li class='minsk'>" + info.list[2].name; + "</li>" + "<li class='weather'>" + info.list[2].weather[0].main + "</li>" + "<li><img src='http://openweathermap.org/img/w/" 
			+ info.list[2].weather[0].icon + ".png'/></li>" +"<li class='temp'>" + info.list[2].main.temp +"C" + "</li> </ul>"; 
	
		
		
		}
		document.getElementById("london").innerHTML = london;
		document.getElementById("oslo").innerHTML = oslo;
		document.getElementById("minsk").innerHTML = minsk;	
	}
}

function updatePage(){
	setTimeout(function(){
		location.reload();
	}, 60000);

	var x = moment().format('LTS');
	document.getElementById('time').innerHTML = x;

}


