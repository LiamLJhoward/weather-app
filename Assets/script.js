let button = document.querySelector('.button');
let input = document.querySelector('.inputValue');
let city = document.querySelector('.city');
let temp = document.querySelector('.temp');
let humidity = document.querySelector('.humidity');
let wind = document.querySelector('.wind');

const QueryURL = "https://api.openweathermap.org/data/2.5/weather?q="
const APIKey = "&appid=bc6266928e139dd4a00f5bf323d8bf06"

const fiveDay = "http://api.openweathermap.org/data/2.5/forecast/daily?q="

button.addEventListener('click', function() {
    fetch(QueryURL + input.value + APIKey)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let cityValue = data.name;
        let tempValue = data.main.temp;
        let humidityValue = data.main.humidity;
        let windValue = data.wind.speed;
        let tempC = (tempValue - 273.15).toFixed(2);
    
        city.innerHTML = "Location:    " + cityValue + ("  (") + moment().format('MMMM Do YYYY') + (")");
        temp.innerHTML = "Temperature:    " + tempC + "°C";
        humidity.innerHTML = "Humidity:    " + humidityValue + "%";
        wind.innerHTML = "Wind:    " + windValue + " mph";
    
        

    
})});