export default class WeatherApi {
  constructor(config) {
    this._url = config.url;
    this._authorization = config.authorization;
  }

  getWeatherInfo(city) {
    return fetch(`${this._url}${this._authorization}&q=${city}&lang=ru`).then(
      this._handleResponse
    );
  }

  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка:${res.status}`);
    }
  }
}
