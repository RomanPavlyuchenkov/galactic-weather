import "../pages/index.css";
import WeatherApi from "../components/WeatherApi.js";
import InfoWeather from "../components/InfoWeather.js";
import SubmitCity from "../components/SubmitCity.js";
import WeatherTomorrow from "../components/WeatherTomorrow.js";
import Section from "../components/Section.js";
import UserIpApi from "../components/UserIpApi.js";
import {
  kursk,
  shakhtersk,
  rostov,
  weatherTomorrowButton,
  weatherMain,
} from "../utils/constants.js";
const weatherApi = new WeatherApi({
  authorization: "0d448b1511434f5e8ba121723242703",
});

//Получаем  Ip пользавтеля
const userIp = new UserIpApi({ url: "https://api.sypexgeo.net/" });
userIp
  .getIp()
  .then((ip) => {
    loadingPage(ip.city.name_en);
  })
  .catch((err) => console.log(`catch: ${err}`));

//Загружаем страницу
function loadingPage(city) {
  weatherApi
    .getWeatherInfo(city)
    .then((weather) => {
      infoWeather.setWeatherInfo(weather);
    })
    .catch((err) => console.log(`catch: ${err}`));
}

/* Отображаем инфу о погоде на стрнице */
const infoWeather = new InfoWeather({
  temp: ".page__main-info-temp",
  city: ".page__main-info-city",
  condition: ".page__main-info-condition",
  date: ".page__main-info-date",
  cloud: ".page__details-cloud",
  vind: ".page__details-vind",
  container: ".page__container",
  mobileContainer: ".page__mobile-background",
  handleShowWeatherTomorrow,
});

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

//Погода на завтра

function handleShowWeatherTomorrow(city) {
  weatherApi
    .getWeatherForecast(city)
    .then(renderCard.clearContainer())
    .then((forecast) => {
      forecast.forecast.forecastday
        .reverse()
        .forEach((item) => renderElement(item));
      renderCard.addDays();
    })
    .catch((err) => console.log(`catch: ${err}`));
}

function renderElement(element) {
  const card = new WeatherTomorrow(".template-weather-tomorrow", element);
  const cardElement = card.createCard();
  renderCard.addItem(cardElement);
}

const renderCard = new Section(
  renderElement,
  ".page__weather-tomorrow",
  weatherTomorrowButton,
  weatherMain
);

renderCard.handleShowWather();
