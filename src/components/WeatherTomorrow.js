export default class WeatherTomorrow {
  constructor(templateSelector, data) {
    this._templateSelector = templateSelector;
    this._dateApi = data.date;
    this._conditionApi = data.day.condition.text;
    this._minTempApi = data.day.mintemp_c;
    this._maxTempApi = data.day.maxtemp_c;
  }

  _getTemplate() {
    const templeateElements = document.querySelector(
      this._templateSelector
    ).content;
    const cardElement = templeateElements
      .querySelector(".page__weather-tomorrow-info")
      .cloneNode(true);
    return cardElement;
  }

  createCard() {
    this._element = this._getTemplate();
    this._date = this._element.querySelector(".page__weather-tomorrow-date");
    this._condition = this._element.querySelector(
      ".page__weather-tomorrow-condition"
    );
    this._temp = this._element.querySelector(".page__weather-tomorrow-temp");
    this._date.textContent = this._dateApi;
    this._condition.textContent = this._conditionApi;
    const minTemp = Math.trunc(this._minTempApi);
    const maxTemp = Math.trunc(this._maxTempApi);
    this._temp.textContent = `${minTemp}° - ${maxTemp}° `;
    return this._element;
  }
}
