export default class InfoWeather {
  constructor(data) {
    this._temp = document.querySelector(data.temp);
    this._city = document.querySelector(data.city);
    this._condition = document.querySelector(data.condition);
    this._date = document.querySelector(data.date);
    this._cloud = document.querySelector(data.cloud);
    this._vind = document.querySelector(data.vind);
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
  }
}
