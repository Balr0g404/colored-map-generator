//var json_test = {"CN" : 42, "FR" : 36, "US" : 55, "CA" : 78, "DE" : 12, "AU" : 96}

//Fonctions
function CheckInput(data) {
	if (!data)
	{
	}
	else if (typeof data ==="string")
	{
		try
		{
			data = JSON.parse(data);
			for (v in data)
			{
				if (typeof data[v] != "number" || data[v] < 0)
				{
					alert("Merci d'entrer des valeurs correctes.")
				}
			}
			return data;
		}
		catch (e) {
			alert("Merci de renter un JSON valide, dont les clés correspondent au code alpha2 des pays. \n")
		}

	}
	else
	{
		return JSON.parse(data)
	}
}


function setColor(json, worldmap){
		for (v in json)
		{
			if (json[v] < 20)
			{
				$(worldmap.getElementById(v)).addClass('green');
			}
			else if (20 < json[v] && json[v] < 40)
			{
				$(worldmap.getElementById(v)).addClass('yellow');
			}
			else if (40 < json[v]  && json[v] < 60)
			{
				$(worldmap.getElementById(v)).addClass('orange');
			}
			else if (60 < json[v] && json[v] < 100)
			{
				$(worldmap.getElementById(v)).addClass('red');
			}
		}
}

function cleanMap(worldmap){
	red = worldmap.getElementsByClassName('red');
	orange = worldmap.getElementsByClassName('orange');
	yellow = worldmap.getElementsByClassName('yellow');
	green = worldmap.getElementsByClassName('green');

	$(red).removeClass('red');
	$(orange).removeClass('orange');
	$(yellow).removeClass('yellow');
	$(green).removeClass('green');
}

// MAIN CODE

$('#svg').ready(function(){
  var worldmap = svg.contentDocument;
  console.log(worldmap);

    $('#send').click(function() {
      cleanMap(worldmap);
		values = document.getElementById('jsoninput').value;
		j = CheckInput(values);
		setColor(j, worldmap);
    });

});
