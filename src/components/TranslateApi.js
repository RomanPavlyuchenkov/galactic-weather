export default class TranslateApi {
  constructor(config) {
    this._url = config.url;
    this._authorization = config.authorization;
  }

  postWords(words) {
    return fetch(`${this._url}`, {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "Accept-Encoding": "application/gzip",
        "X-RapidAPI-Key": this._authorization,
        "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
      },
      body: new URLSearchParams({
        q: words,
        target: "en",
        source: "ru",
      }),
    }).then(this._handleResponse);
  }

  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка:${res.status}`);
    }
  }
}
