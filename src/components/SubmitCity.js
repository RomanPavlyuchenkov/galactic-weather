// Делаем перевод inputa
import TranslateApi from "./TranslateApi.js";
const translate = new TranslateApi({
  url: "https://google-translate1.p.rapidapi.com/language/translate/v2",
  authorization: "886de4e08cmsh785bd20ad4dc211p11a356jsn6aaf491a7959",
});

export default class SubmitCity {
  constructor(form, handleSubmitCity) {
    this._form = document.querySelector(form);
    this._input = this._form.querySelector(".page__input");
    this._handleSubmitCity = handleSubmitCity;
  }
  sendForm() {
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();

      translate
        .postWords(this._input.value)
        .then((tranlate) => {
          this._handleSubmitCity(tranlate.data.translations[0].translatedText);
        })
        .then(this._form.reset())
        .catch((err) => console.log(`catch: ${err}`));
    });
  }
}
