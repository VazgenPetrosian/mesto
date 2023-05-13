import { Popup } from "./Popup.js";

class PopupWithConform extends Popup {
  constructor(selectorPopup, { submitForm }) {
    super(selectorPopup);
    this._submitForm = submitForm;
  }
  handleSubmit(callBack) {
    this._submitForm = callBack;
  }
  _setSubmit = (e) => {
    e.preventDefault();
    this._submitForm();
  };

  setEventListeners() {
    super.setEventListeners();
    this._popup.addEventListener("submit", this._setSubmit), { once: true };
  }
}
export { PopupWithConform };
