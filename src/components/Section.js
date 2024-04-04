export default class Section {
  constructor(renderer, containerSelector, weatherTomorrowButton, weatherMain) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
    this._weatherTomorrowButton = weatherTomorrowButton;
    this._weatherMain = weatherMain;
  }

  addItem(element) {
    this._container.prepend(element);
  }
  renderItems(items) {
    items.forEach((item) => {
      this._renderer(item);
    });
  }

  clearContainer() {
    this._arrayCards = this._container.querySelectorAll(
      ".page__weather-tomorrow-info"
    );

    if (this._arrayCards.length > 1) {
      this._arrayCards[0].remove();
      this._arrayCards[1].remove();
      this._arrayCards[2].remove();
    }
  }

  handleShowWather() {
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
  addDays() {
    const arrayDays = this._container.querySelectorAll(
      ".page__weather-tomorrow-info"
    );
    arrayDays[0].querySelector(".page__weather-tomorrow-date").textContent =
      "Сегодня";
    arrayDays[1].querySelector(".page__weather-tomorrow-date").textContent =
      "Завтра";
    arrayDays[2].querySelector(".page__weather-tomorrow-date").textContent =
      "Послезавтра";
  }
}
