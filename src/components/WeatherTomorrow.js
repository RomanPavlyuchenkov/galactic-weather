export default class WeatherTomorrow {
  constructor(
    templateSelector,
    data,
    container,
    weatherTomorrowButton,
    weatherMain
  ) {
    this._templateSelector = templateSelector;
    this._dateApi = data.date;
    this._conditionApi = data.day.condition.text;
    this._minTempApi = data.day.mintemp_c;
    this._maxTempApi = data.day.maxtemp_c;
    this._container = container;
    this._weatherTomorrowButton = weatherTomorrowButton;
    this._weatherMain = weatherMain;
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
    this._handleShowWather();
    return this._element;
  }
  clearContainer() {
    this._arrayCards = this._container.querySelectorAll(
      ".page__weather-tomorrow-info"
    );
    if (this._arrayCards.length > 3) {
      this._arrayCards[0].remove();
      this._arrayCards[1].remove();
      this._arrayCards[2].remove();
    }
  }
  _handleShowWather() {
    this._weatherTomorrowButton.addEventListener("click", () => {
      this._container.classList.toggle("page__weather-tomorrow_active");

      if (this._container.classList.contains("page__weather-tomorrow_active")) {
        this._weatherTomorrowButton.textContent = "Скрыть";
        this._weatherMain.classList.add("page__main-info_hiden");
      } else {
        this._weatherTomorrowButton.textContent = "Погода на завтра";
        this._weatherMain.classList.remove("page__main-info_hiden");
      }
    });
  }
}
