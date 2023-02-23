let button = document.querySelector('.button');
let input = document.querySelector('.inputValue');
let city = document.querySelector('.city');
let temp = document.querySelector('.temp');
let humidity = document.querySelector('.humidity');
let wind = document.querySelector('.wind');

const QueryURL = "http://api.openweathermap.org/data/2.5/weather?q="
const APIKey = "&appid=bc6266928e139dd4a00f5bf323d8bf06"

button.addEventListener('click', function() {
    fetch(QueryURL + input.value + APIKey)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let cityValue = data.name;
        let tempValue = data.main.temp;
        let humidityValue = data.main.humidity;
        let windValue = data.wind.speed;

        city.innerHTML = cityValue;
        temp.innerHTML = tempValue;
        humidity.innerHTML = humidityValue;
        wind.innerHTML = windValue;
    })


    
})




