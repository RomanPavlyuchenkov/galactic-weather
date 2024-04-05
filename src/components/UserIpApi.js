export default class UserIpApi {
  constructor(config) {
    this._url = config.url;
  }

  getIp() {
    return fetch(`${this._url}`).then(this._handleResponse);
  }

  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка:${res.status}`);
    }
  }
}
