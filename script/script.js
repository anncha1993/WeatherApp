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
			var london = "<span class='city'>" + info.list[0].name + "</span>";
			var vaerLondon = "<span class='weather'>" + info.list[0].weather[0].main + "</span>"; 
			var iconLondon = "<img src='http://openweathermap.org/img/w/" + info.list[0].weather[0].icon + ".png'/>"; 
			var tempLondon = "<span class='temp'>" + info.list[0].main.temp +"C" + "</span>";
			
			var oslo = "<span class='oslo'>" + info.list[1].name; + "</span>"; 
			var vaerOslo = "<span class='weather'>" + info.list[1].weather[0].main + "</span>"; 
			var iconOslo = "<img src='http://openweathermap.org/img/w/" + info.list[1].weather[0].icon + ".png'/>";
			var tempOslo = "<span class='temp'>" + info.list[1].main.temp +"C" + "</span>"; 
			
			var minsk = "<span class='minsk'>" + info.list[2].name; + "</span>"; 
			var vaerMinsk = "<span class='weather'>" + info.list[2].weather[0].main + "</span>"; 
			var iconMinsk = "<img src='http://openweathermap.org/img/w/" + info.list[2].weather[0].icon + ".png'/>";
			var tempMinsk = "<span class='temp'>" + info.list[2].main.temp +"C" + "</span>";  
		
			console.log(JSON.stringify(info.list[1]));
		}
		document.getElementById("london").innerHTML = london +"</br>"+ vaerLondon + "</br>"+ iconLondon +"</br>"+ tempLondon;
		document.getElementById("oslo").innerHTML = oslo +"</br>"+ vaerOslo +"</br>"+ iconOslo +"</br>"+ tempOslo;
		document.getElementById("minsk").innerHTML = minsk +"</br>"+ vaerMinsk +"</br>"+ iconMinsk +"</br>"+ tempMinsk;	
	}
}

function updatePage(){
	setTimeout(function(){
		location.reload();
	}, 60000);

	var x = moment().format('LTS');
	document.getElementById('time').innerHTML = x;

}


