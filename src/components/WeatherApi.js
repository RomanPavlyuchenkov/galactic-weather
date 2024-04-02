export default class WeatherApi {
  constructor(config) {
    this._authorization = config.authorization;
  }

  getWeatherInfo(city) {
    return fetch(
      `https://api.weatherapi.com/v1/current.json?key=${this._authorization}&q=${city}&lang=ru`
    ).then(this._handleResponse);
  }

  getWeatherForecast(city) {
    return fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${this._authorization}&q=${city}&days=3&lang=ru`
    ).then(this._handleResponse);
  }

  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка:${res.status}`);
    }
  }
}
