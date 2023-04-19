class Card {
  constructor({ data, handleCardClick }, templateSelector) {
    this._card = data;
    this._name = this._card.name;
    this._link = this._card.link;
    this._alt = this._card.name;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
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
    this._cardImage = this._element.querySelector(".card__image");
    this._cardLike = this._element.querySelector(".card__like");
    // this._cardImage.src = this._link;
    this._element.querySelector(".card__image").src = this._link;
    this._element.querySelector(".card__heading").textContent = this._name;
    this._cardImage.alt = this._alt;

    this._setEventListeners();
    return this._element;
  }

  _getLike() {
    this._cardLike.classList.toggle("card__like_active");
  }

  _deleteCard() {
    this._element.remove();
  }

  _setEventListeners() {
    this._cardImage.addEventListener("click", () => {
      this._handleCardClick(this._name, this._link);
    });

    this._element
      .querySelector(".card__trashcan")
      .addEventListener("click", () => {
        this._deleteCard();
      });

    this._cardLike.addEventListener("click", () => {
      this._getLike();
    });
  }
}

export { Card };
