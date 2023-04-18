import { Popup } from "./Popup.js";
class PopupWithImage extends Popup {
  constructor(selectorPopup) {
    super(selectorPopup);
    this._popupImage = this._popup.querySelector(".popup__zoom-image");
    this._popupCaption = this._popup.querySelector(".popup__zoom-caption");
  }

  openPopup(name, link) {
    super.openPopup();
    this._popupImage.src = link;
    this._popupCaption.textContent = name;
    this._popupImage.alt = name;
  }
}
export { PopupWithImage };
