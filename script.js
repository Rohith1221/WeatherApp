var name = document.getElementById('.name')
var desc = document.getElementById('.desc')
var temp = document.getElementById('.temp')

function myfunction() {

    // var info = document.getElementById("getloc").value;
    // if (info == "" || info == " ")
    //     document.getElementById("result").innerHTML = "";
    // else
    //     document.getElementById("result").innerHTML = "City name : " + info;

    var info = document.getElementById('getloc').value;

    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + info + '&appid=c0e1c8e48ed4e57d09299a6387d5a4cc&units=metric')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            document.getElementById('name').innerHTML = "Place : " + data['name'];
            document.getElementById('temp').innerHTML = "Temprature : " + data['main']['temp'] + "&#8451;";
            document.getElementById('desc').innerHTML = "Description : " + data['weather'][0]['description'];
            document.getElementById('mintemp').innerHTML = "Minimum temperature : " + data['main']['temp_min'] + "&#8451;";
            document.getElementById('maxtemp').innerHTML = "Maximum temperature : " + data['main']['temp_max'] + "&#8451;";


            var iconid = data['weather'][0]['icon'];
            // console.log(iconid);
            document.getElementById('icon').innerHTML = `<img src="icons/${iconid}.png"/>`;
        })
        .catch(err => alert("wrong city name"))
}

// document.getElementById('buttn').addEventListener("click", function () {
//     var info = document.getElementById("getloc").value;
//     document.getElementById("result").innerHTML = "City name : " + info;
// })