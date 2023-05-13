class Card {
  constructor(
    { data, handleCardClick },
    userId,
    { handleCardLikes },
    { handleCardDelete },
    templateSelector
  ) {
    this._card = data;
    this._name = this._card.name;
    this._link = this._card.link;
    this._alt = this._card.name;
    this._likes = this._card.likes;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleCardLikes = handleCardLikes;
    this._handleCardDelete = handleCardDelete;
    this._userId = userId;
    this._ownerId = this._card.owner._id;
  }

  _getTemplate() {
    const element = document
      .querySelector(this._templateSelector)
      .content.querySelector(".card")
      .cloneNode(true);
    return element;
  }

  _checkMyCard() {
    if (this._ownerId !== this._userId) {
      this._cardTrashcan.classList.add("card__trashcan_type_hidden");
    }
  }

  createCard() {
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector(".card__image");
    this._cardLike = this._element.querySelector(".card__like");
    this._element.querySelector(".card__image").src = this._link;
    this._element.querySelector(".card__heading").textContent = this._name;
    this._cardImage.alt = this._alt;
    this._cardTrashcan = this._element.querySelector(".card__trashcan");
    this._counterLike = this._element.querySelector(".card__likes-number");

    this._setEventListeners();
    this._checkMyLike();
    this.showCardLikes(this._likes);
    this._checkMyCard();
    return this._element;
  }
  //раздел лайков
  hasMyLike() {
    return this._likes.some((user) => user._id === this._userId);
  }
  isLiked() {
    this._cardLike.classList.add("card__like_active");
  }
  isNotLiked() {
    this._cardLike.classList.remove("card__like_active");
  }
  _checkMyLike() {
    this.hasMyLike() ? this.isLiked() : this.isNotLiked();
  }
  showCardLikes(data) {
    this._likes = data;
    this._counterLike.textContent = this._likes.length;
  }
  //раздел лайков
  deleteCard() {
    this._element.remove();
  }

  _setEventListeners() {
    this._cardImage.addEventListener("click", () => {
      this._handleCardClick(this._name, this._link);
    });

    this._cardTrashcan.addEventListener("click", () => {
      this._handleCardDelete(this);
    });

    this._cardLike.addEventListener("click", () => {
      this._handleCardLikes(this);
    });
  }
}

export { Card };
