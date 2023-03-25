

const searchBtn = document.getElementById("searchBtn"),
      inputValue = document.getElementById("inputValue"),
      temperature = document.getElementById("currentDegree"),
      humidity = document.getElementById("currentHumidity"),
      realFeel = document.getElementById("currentRealFeel"),
      windSpeed = document.getElementById("currentWindSpeed"),
      cityName = document.getElementById("currentCity"),
      countryName = document.getElementById("currentCountry");
    
// Add event listener for click on search button
searchBtn.addEventListener("click", function () {
  getWeatherData();
});

// Add event listener for keypress enter on input field
inputValue.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    getWeatherData();
  }
});

// Function to fetch weather data and update HTML
function getWeatherData() {
  let api = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&appid=51a9ed3379cefdcccc1c0afc1b54ad01`;
  fetch(api)
    .then((response) => response.json())
    .then((data) => {
      let tempValue = data.main.temp;
      let humidityValue = data.main.humidity;
      let realFeelValue = data.main.feels_like;
      let windSpeedValue = data.wind.speed;
      let searchedCityName = data.name;
      let countryShort = data.sys.country;

      temperature.innerHTML = Math.round(tempValue - 273.15);
      humidity.innerHTML = humidityValue;
      realFeel.innerHTML = Math.round(realFeelValue - 273.15);
      windSpeed.innerHTML = windSpeedValue;
      cityName.innerHTML = searchedCityName;
      countryName.innerText = countryShort;
    })
    .catch((err) => {
      alert("Error");
      console.log(err);
    });
}

let btnChange = document.querySelector(".circleChange");
let bodyColor = document.body;
let value = 1;

btnChange.addEventListener("click", function () {
  if (value == 0) {
    btnChange.style.marginLeft = "50px";
    bodyColor.style.backgroundColor = "#100f14";
    value = 1;
  } else {
    btnChange.style.marginLeft = "0px";
    bodyColor.style.backgroundColor = "#6096fd";
    value = 0;
  }
});