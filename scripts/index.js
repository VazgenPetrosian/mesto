import { initialCards } from "../scripts/constants.js";
import { FormValidator, settings } from "./FormValidator.js";
import { Card } from "./Card.js";
const popups = document.querySelectorAll(".popup");
const name = document.querySelector(".popup__input_select_place");
const link = document.querySelector(".popup__input_select_link");
const popupBigImage = document.querySelector(".popup_type_zoom");
const formSubmitCard = document.forms["card-form"];
const popupImage = document.querySelector(".popup__zoom-image");
const popupCaption = document.querySelector(".popup__zoom-caption");
const buttonOpenPopupProfile = document.querySelector(".profile__edit-button");
const popupEditProfile = document.querySelector(".popup_type_edit-profile");
const saveButton = document.querySelector(".popup__button_type_add-card");
const profileName = document.querySelector(".profile__name");
const profileInfo = document.querySelector(".profile__desc-profile");
const userNameInput = document.querySelector(".popup__name");
const userOccupationInput = document.querySelector(".popup__description");
const formEditProfile = document.forms["edit-form"];
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
const closeButtons = document.querySelectorAll(".popup__close");
const cardsContainer = document.querySelector(".cards");
//valid

function handleFormSubmitCard(event) {
  event.preventDefault();
  const card = {
    name: name.value,
    link: link.value,
    alt: name.value,
  };
  formSubmitCard.reset();
  cardsContainer.prepend(createCard(card));
  closePopup(popupAddCard);
}
// function handleDeleteButtonClick(event) {
//   const button = event.target;
//   const card = button.closest(".card");
//   card.remove();
// }

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

function createCard(item) {
  const card = new Card(item, "#templateID");
  const cardElement = card.createCard();
  return cardElement;
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

buttonOpenPopupAddCard.addEventListener("click", function () {
  openPopup(popupAddCard);
  resetValidation();
});

closeButtons.forEach((button) => {
  const popup = button.closest(".popup");
  button.addEventListener("click", () => closePopup(popup));
});

formSubmitCard.addEventListener("submit", handleFormSubmitCard);

const exampleCard = new FormValidator(settings, formSubmitCard);
exampleCard.enableValidation();
const exampleProfile = new FormValidator(settings, formEditProfile);
exampleProfile.enableValidation();

initialCards.forEach((item) => {
  const cardElement = createCard(item);
  cardsContainer.append(cardElement);
});
