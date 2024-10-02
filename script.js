const searchBtn = document.getElementById("searchBtn");
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');

const inputBox = document.querySelector('.input-box');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const location_not_found = document.querySelector('.location-not-found');
const weather_body = document.querySelector('.weather-body');


async function checkWeather(city) {
    const api_key = "370c8aff943d36a460c9fd87bad5fab0";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(reponse =>
        reponse.json());

    if (weather_data.cod === `404`) {
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        console.log("erro");
        return;
    }
    // location_not_found.style.display = "none";
    // weather_body.style.display = "flex";
    // console.log(weather_data);
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;

    switch (weather_data.weather[0].main) {
        case 'Clouds':
            weather_img.src = "./images/cloud.png";
            break;
        case 'Clear':
            weather_img.src = "./images/clear.png";
            break
        case 'Rain':
            weather_img.src = "./images/rain.png";
            break;
        case 'Snow':
            weather_img.src = "./images/snow.png";
            break;
        case 'Mist':
            weather_img.src = "./images/mist.png";
    }
   // console.log(weather_data);
}

searchBtn.addEventListener('click', () => {

    checkWeather(inputBox.value)

});



// document.getElementById("inputBox").addEventListener("keyup", function(event) {
//     if (event.key === "Enter") {
//         searchBtn(); // Call your weather function
//     }
// });



