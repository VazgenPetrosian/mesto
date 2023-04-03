class Card {
  constructor(data, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._alt = data.name;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    const element = document
      .querySelector(this._templateSelector)
      .content.querySelector(".card")
      .cloneNode(true);
    return element;
  }

  createCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector(".card__image").src = this._link;
    this._element.querySelector(".card__heading").textContent = this._name;
    this._element.querySelector(".card__image").alt = this._alt;
    return this._element;
  }

  _getLike() {
    this._element
      .querySelector(".card__like")
      .classList.toggle("card__like_active");
  }

  _deleteCard() {
    this._element.remove();
  }

  _openBigImagePopup() {
    document.querySelector(".popup__zoom-image").src = this._link;
    document.querySelector(".popup__zoom-caption").textContent = this._name;
    document.querySelector(".popup__zoom-image").alt = this._alt;
    document.querySelector(".popup_type_zoom").classList.add("popup_opened");
  }

  _closeBigImagePopup() {
    document.querySelector(".popup__zoom-image").src = "";
    document.querySelector(".popup__zoom-caption").textContent = "";
    document.querySelector(".popup__zoom-image").alt = "";
    document.querySelector(".popup_type_zoom").classList.remove("popup_opened");
  }
  _closeByEsc(evt) {
    if (evt.key === "Escape") {
      const openedPopup = document.querySelector(".popup_opened");
      document
        .querySelector(".popup_type_zoom")
        .classList.remove("popup_opened");
    }
  }

  _setEventListeners() {
    this._element
      .querySelector(".card__image")
      .addEventListener("click", () => {
        this._openBigImagePopup();
      });

    document
      .querySelector(".popup__close_type_zoom")
      .addEventListener("click", () => {
        this._closeBigImagePopup();
      });

    this._element
      .querySelector(".card__trashcan")
      .addEventListener("click", () => {
        this._deleteCard();
      });

    this._element.querySelector(".card__like").addEventListener("click", () => {
      this._getLike();
    });

    document.addEventListener("keydown", this._closeByEsc);
  }
}

export { Card };
