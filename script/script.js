window.onload = update;
var data;


function update(){
	/*fetching extern data from openweathermap*/
	data = new XMLHttpRequest();
	data.onreadystatechange = displayData;
	data.open("GET", "http://api.openweathermap.org/data/2.5/group?id=2643743,6453366,764679&APPID=c6331badce9c725318e21ae37054570f&units=metric", true);
	data.send();

	updatePage();

}

function displayData(){
	/*Handeling data from JSON*/
	if (data.readyState === 4 && data.status ===200) {
		var info = JSON.parse(data.responseText);
		for (var i = 0; i < info.list.length; i++) {
			/* London data */
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
			/*Oslo data*/
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
			/* Minks data*/
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
		}
		document.getElementById("london").innerHTML = wholeLondon;
		document.getElementById("oslo").innerHTML = wholeOslo;
		document.getElementById("minsk").innerHTML = wholeMinsk;	
	}
}

function updatePage(){
	/*updating page every min*/
	setTimeout(function(){
		location.reload();
	}, 60000);
	/*writing out time of day every update*/
	var x = moment().format('LTS');
	document.getElementById('time').innerHTML = x;

}


