export default class SubmitCity {
  constructor(form, handleSubmitCity) {
    this._form = document.querySelector(form);
    this._input = this._form.querySelector(".page__input");
    this._handleSubmitCity = handleSubmitCity;
  }
  sendForm() {
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleSubmitCity(this._input.value);
    });
  }
}
