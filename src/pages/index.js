import WeatherApi from "../components/WeatherApi.js";
import InfoWeather from "../components/InfoWeather.js";
import SubmitCity from "../components/SubmitCity.js";
import { kursk, shakhtersk, rostov } from "../utils/constants.js";
const weatherApi = new WeatherApi({
  url: "https://api.weatherapi.com/v1/current.json?key=",
  authorization: "0d448b1511434f5e8ba121723242703",
});

/* Отображаем инфу о погоде на стрнице */
const infoWeather = new InfoWeather({
  temp: ".page__main-info-temp",
  city: ".page__main-info-city",
  condition: ".page__main-info-condition",
  date: ".page__main-info-date",
  cloud: ".page__details-cloud",
  vind: ".page__details-vind",
});

weatherApi
  .getWeatherInfo("rostov-on-don")
  .then((weather) => {
    infoWeather.setWeatherInfo(weather);
  })
  .catch((err) => console.log(`catch: ${err}`));

//Отбражаем инфу в Шахтерске и Курске
shakhtersk.addEventListener("click", () => {
  weatherApi
    .getWeatherInfo("makeevka")
    .then((weather) => {
      infoWeather.setWeatherInfo(weather);
    })
    .catch((err) => console.log(`catch: ${err}`));
});

kursk.addEventListener("click", () => {
  weatherApi
    .getWeatherInfo("kursk")
    .then((weather) => {
      infoWeather.setWeatherInfo(weather);
    })
    .catch((err) => console.log(`catch: ${err}`));
});

rostov.addEventListener("click", () => {
  weatherApi
    .getWeatherInfo("rostov-on-don")
    .then((weather) => {
      infoWeather.setWeatherInfo(weather);
    })
    .catch((err) => console.log(`catch: ${err}`));
});

// Делаем поик города
const submitСity = new SubmitCity(".page__form", (city) => {
  weatherApi
    .getWeatherInfo(city)
    .then((weather) => {
      infoWeather.setWeatherInfo(weather);
    })
    .catch((err) => console.log(`catch: ${err}`));
});
submitСity.sendForm();