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
			
			var london = info.list[0].name;
			var vaerLondon = info.list[0].weather[0].main; 
			var iconLondon = "<img src='http://openweathermap.org/img/w/" + info.list[0].weather[0].icon + ".png'/>"; 
			var tempLondon = info.list[0].main.temp +"C";
			
			var wholeLondon = 
			"<ul>" + 
				"<li>"+london+"</li>" +
				"<li>" + vaerLondon +"</li>" + 
				"<li>" + iconLondon +"</li>" + 
				"<li>" + tempLondon +"</li>" + 
			"</ul>";

			
			var oslo = info.list[1].name;
			var vaerOslo = info.list[1].weather[0].main; 
			var iconOslo = "<img src='http://openweathermap.org/img/w/" + info.list[1].weather[0].icon + ".png'/>";
			var tempOslo = info.list[1].main.temp +"C"; 

			var wholeOslo = 
			"<ul>" + 
				"<li>"+oslo+"</li>" +
				"<li>" + vaerOslo +"</li>" + 
				"<li>" + iconOslo +"</li>" + 
				"<li>" + tempOslo +"</li>" + 
			"</ul>";
			
			var minsk = info.list[2].name; 
			var vaerMinsk = info.list[2].weather[0].main; 
			var iconMinsk = "<img src='http://openweathermap.org/img/w/" + info.list[2].weather[0].icon + ".png'/>";
			var tempMinsk = info.list[2].main.temp +"C"; 

			var wholeMinsk = 
			"<ul>" + 
				"<li>"+minsk+"</li>" +
				"<li>" + vaerMinsk +"</li>" + 
				"<li>" + iconMinsk +"</li>" + 
				"<li>" + tempMinsk +"</li>" + 
			"</ul>"; 
		
			console.log(JSON.stringify(info.list[1]));
		}
		document.getElementById("london").innerHTML = wholeLondon;
		document.getElementById("oslo").innerHTML = wholeOslo;
		document.getElementById("minsk").innerHTML = wholeMinsk;	
	}
}

function updatePage(){
	setTimeout(function(){
		location.reload();
	}, 60000);

	var x = moment().format('LTS');
	document.getElementById('time').innerHTML = x;

}


