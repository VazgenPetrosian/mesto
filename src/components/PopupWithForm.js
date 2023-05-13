import { Popup } from "./Popup.js";

class PopupWithForm extends Popup {
  constructor(selectorPopup, { submitForm }) {
    super(selectorPopup);
    this._formElement = this._popup.querySelector(".popup__form");
    this._inputList = Array.from(
      this._formElement.querySelectorAll(".popup__input")
    );
    this._submitForm = submitForm;
    this._submitButton = this._formElement.querySelector(".popup__button");
  }
  _getInputValues() {
    const inputValues = new Object();
    this._inputList.forEach((inputElement) => {
      inputValues[inputElement.name] = inputElement.value;
    });
    return inputValues;
  }
  renderLoading(isLoading) {
    isLoading
      ? (this._submitButton.textContent = "Сохранение...")
      : (this._submitButton.textContent = "Сохранить");
  }
  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._submitForm(this._getInputValues());
    });
  }
  close() {
    super.close();
    this._formElement.reset();
  }
}
export { PopupWithForm };
