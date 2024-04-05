import {
  rostovBackgroundthree,
  rostovBackgroundTwo,
  rostovBackgroundOne,
  donetskBackground,
  defaultBackground,
} from "../utils/constants.js";
export default class InfoWeather {
  constructor(data) {
    this._temp = document.querySelector(data.temp);
    this._city = document.querySelector(data.city);
    this._condition = document.querySelector(data.condition);
    this._date = document.querySelector(data.date);
    this._cloud = document.querySelector(data.cloud);
    this._vind = document.querySelector(data.vind);
    this._container = document.querySelector(data.container);
    this._mobileContainer = document.querySelector(data.mobileContainer);
    this._handleShowWeatherTomorrow = data.handleShowWeatherTomorrow;
  }
  setWeatherInfo(weather) {
    // Math.trunc делает целое число
    const whole = Math.trunc(weather.current.temp_c);
    this._temp.textContent = `${whole}°`;
    weather.location.name === "Makeevka"
      ? (this._city.textContent = "Донецкая область")
      : (this._city.textContent = weather.location.name);
    this._condition.textContent = weather.current.condition.text;
    this._date.textContent = weather.location.localtime;
    this._cloud.textContent = `${weather.current.cloud}%`;
    this._vind.textContent = `${weather.current.wind_mph} м/c`;
    this._showWeatherTomorrow(weather.location.name);
    this._changeBackground(weather.location.name);
  }

  _showWeatherTomorrow(city) {
    this._handleShowWeatherTomorrow(city);
  }
  _changeBackground(city) {
    const arrayRostov = [
      rostovBackgroundthree,
      rostovBackgroundTwo,
      rostovBackgroundOne,
    ];
    const randomItem =
      arrayRostov[Math.floor(Math.random() * arrayRostov.length)];

    if (city === "Rostov-On-Don") {
      this._container.style.backgroundImage = `url(${randomItem})`;
      this._mobileContainer.style.backgroundImage = `url(${randomItem})`;
    } else if (city === "Makeevka") {
      this._container.style.backgroundImage = `url(${donetskBackground})`;
      this._mobileContainer.style.backgroundImage = `url(${donetskBackground})`;
    } else {
      this._container.style.backgroundImage = `url(${defaultBackground})`;
      this._mobileContainer.style.backgroundImage = `url(${defaultBackground})`;
    }
  }
}
