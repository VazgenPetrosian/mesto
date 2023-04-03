import { initialCards } from "../scripts/constants.js";
import { FormValidator, settings } from "./FormValidator.js";
import { Card } from "./card.js";
const popups = document.querySelectorAll(".popup");
const name = document.querySelector(".popup__input_select_place");
const link = document.querySelector(".popup__input_select_link");
const popupBigImage = document.querySelector(".popup_type_zoom");
const formSubmitCard = document.querySelector(".popup__form_type_add-card");
const popupImage = document.querySelector(".popup__zoom-image");
const popupCaption = document.querySelector(".popup__zoom-caption");
const buttonOpenPopupProfile = document.querySelector(".profile__edit-button");
const popupEditProfile = document.querySelector(".popup_type_edit-profile");
const saveButton = document.querySelector(".popup__button_type_add-card");
const profileName = document.querySelector(".profile__name");
const profileInfo = document.querySelector(".profile__desc-profile");
const userNameInput = document.querySelector(".popup__name");
const userOccupationInput = document.querySelector(".popup__description");
const formEditProfile = document.querySelector(
  ".popup__form_type_edit-profile"
);
const nameInput = document.querySelector(".popup__input_select_name");
const occupationInput = document.querySelector(
  ".popup__input_select_description"
);
const buttonCloseEditProfilePopup = document.querySelector(
  ".popup__close_type_edit-profile"
);
const buttonOpenPopupAddCard = document.querySelector(".profile__add-button");
const buttonCloseCreatePopup = document.querySelector(
  ".popup__close_type_add-card"
);
const popupAddCard = document.querySelector(".popup_type_add-card");
const popupBigImageCloseButton = document.querySelector(
  ".popup__close_type_zoom"
);
const cardsContainer = document.querySelector(".cards");
//valid

function handleFormSubmitCard(event) {
  event.preventDefault();
  const card = {
    name: name.value,
    link: link.value,
    alt: name.value,
  };
  formSubmitCard.reset(),
    cardsContainer.prepend(createCard(card)),
    closePopup(popupAddCard);
}
function handleDeleteButtonClick(event) {
  const button = event.target;
  const card = button.closest(".card");
  card.remove();
}

function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closeByEsc);
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closeByEsc);
}

function handleFormSubmitProfile(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileInfo.textContent = occupationInput.value;
  closePopup(popupEditProfile);
}

function createCard(card) {
  const cardTemplate = document
    .querySelector(".template")
    .content.querySelector(".card");
  const element = cardTemplate.cloneNode(true);
  const cardHeading = element.querySelector(".card__heading");
  cardHeading.textContent = card.name;
  const cardImage = element.querySelector(".card__image");
  cardImage.setAttribute("src", card.link);
  cardImage.setAttribute("alt", card.alt);
  const likeButton = element.querySelector(".card__like");
  const getLike = () => {
    likeButton.classList.toggle("card__like_active");
  };
  likeButton.addEventListener("click", getLike);
  const deleteButton = element.querySelector(".card__trashcan");
  deleteButton.addEventListener("click", handleDeleteButtonClick);
  cardImage.addEventListener("click", () => {
    popupImage.setAttribute("src", card.link);
    popupImage.setAttribute("alt", card.alt);
    popupCaption.textContent = card.name;
    openPopup(popupBigImage);
    // closePopup(createPopup);
  });
  return element;
}

function closeByEsc(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
}

popups.forEach((popup) => {
  popup.addEventListener("click", (evt) => {
    if (evt.target.classList.contains("popup_opened")) {
      closePopup(popup);
    }
  });
});

formEditProfile.addEventListener("submit", handleFormSubmitProfile);
buttonOpenPopupProfile.addEventListener("click", function () {
  openPopup(popupEditProfile);
  nameInput.value = profileName.textContent;
  occupationInput.value = profileInfo.textContent;
});
buttonCloseEditProfilePopup.addEventListener("click", function () {
  closePopup(popupEditProfile);
});
buttonOpenPopupAddCard.addEventListener("click", function () {
  openPopup(popupAddCard);
  formSubmitCard.reset();
});
buttonCloseCreatePopup.addEventListener("click", function () {
  closePopup(popupAddCard);
});
popupBigImageCloseButton.addEventListener("click", function () {
  closePopup(popupBigImage);
});
formSubmitCard.addEventListener("submit", handleFormSubmitCard);

const exampleCard = new FormValidator(settings, formSubmitCard);
exampleCard.enableValidation();
const exampleProfile = new FormValidator(settings, formEditProfile);
exampleProfile.enableValidation();

initialCards.forEach((item) => {
  const card = new Card(item, "#templateID");
  const cardElement = card.createCard();
  cardsContainer.append(cardElement);
});
