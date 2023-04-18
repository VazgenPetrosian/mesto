import "./index.css";
import { initialCards } from "../scripts/constants.js";
import { FormValidator, settings } from "../scripts/FormValidator.js";
import { Card } from "../scripts/Card.js";
import { PopupWithImage } from "../scripts/PopupWithImage.js";
import { PopupWithForm } from "../scripts/PopupWithForm.js";
import { UserInfo } from "../scripts/UserInfo.js";
import { Section } from "../scripts/Section.js";
// const buttonCloseCreatePopup = document.querySelector(
//   ".popup__close_type_add-card"
// );
// const popupAddCard = document.querySelector(".popup_type_add-card");
// const popupBigImageCloseButton = document.querySelector(
//   ".popup__close_type_zoom"
// );
// const closeButtons = document.querySelectorAll(".popup__close");
// const popups = document.querySelectorAll(".popup");
// const name = document.querySelector(".popup__input_select_place");
// const link = document.querySelector(".popup__input_select_link");
// const popupBigImage = document.querySelector(".popup_type_zoom");
// const popupImage = document.querySelector(".popup__zoom-image");
// const saveButton = document.querySelector(".popup__button_type_add-card");
// const popupEditProfile = document.querySelector(".popup_type_edit-profile");
// const userNameInput = document.querySelector(".popup__name");
// const userOccupationInput = document.querySelector(".popup__description");
// const popupCaption = document.querySelector(".popup__zoom-caption");
// const buttonCloseEditProfilePopup = document.querySelector(
//   ".popup__close_type_edit-profile"
// );
const formSubmitCard = document.forms["card-form"];
const buttonOpenPopupProfile = document.querySelector(".profile__edit-button");
const profileName = document.querySelector(".profile__name");
const profileInfo = document.querySelector(".profile__desc-profile");
const formEditProfile = document.forms["edit-form"];
const nameInput = document.querySelector(".popup__input_select_name");
const occupationInput = document.querySelector(
  ".popup__input_select_description"
);
const buttonOpenPopupAddCard = document.querySelector(".profile__add-button");
const cardsContainer = document.querySelector(".cards");

//класс Section добавляет карточки обрабатывая массив
const startCards = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const startCard = new Card(
        {
          data: item,
          handleCardClick: (name, link) => {
            popupCardBigImage.openPopup(name, link);
          },
        },
        "#templateID"
      );
      const cardElement = startCard.createCard();
      startCards.addItem(cardElement);
    },
  },
  cardsContainer
);
startCards.renderItems();
//класс Section добавляет карточки обрабатывая массив

//экземпляры попапов с формой
const popupWithFormProfile = new PopupWithForm(".popup_type_edit-profile", {
  submitForm: (userData) => {
    profileName.textContent = userData["name"];
    profileInfo.textContent = userData["description"];
    popupWithFormProfile.closePopup();
  },
});
popupWithFormProfile.setEventListeners();
//функция отдельной карточки
const popupWithFormCard = new PopupWithForm(".popup_type_add-card", {
  submitForm: (inputValues) => {
    const newCardSection = new Section(
      {
        items: [
          {
            name: inputValues["name"],
            link: inputValues["description"],
          },
        ],
        renderer: (item) => {
          const newCardCard = new Card(
            {
              data: item,
              handleCardClick: (name, link) => {
                popupCardBigImage.openPopup(name, link);
              },
            },
            "#templateID"
          );
          const cardElement = newCardCard.createCard();
          newCardSection.addItem(cardElement);
        },
      },
      cardsContainer
    );
    newCardSection.renderItems();
    popupWithFormCard.closePopup();
  },
});

popupWithFormCard.setEventListeners();
//экземпляры попапов с формой

//слушатели на попап увеличения картинки
const popupCardBigImage = new PopupWithImage(".popup_type_zoom");
popupCardBigImage.setEventListeners();
//слушатели на попап увеличения картинки

//экземпляр инфы о профиле
const userProfileInfo = new UserInfo({
  selectorUserName: ".profile__name",
  selectorUserInfo: ".profile__desc-profile",
});
//экземпляр инфы о профиле

//слушатель открытия попапа о профайле
buttonOpenPopupProfile.addEventListener("click", function () {
  const userProfileData = userProfileInfo.getUserInfo();
  popupWithFormProfile.openPopup();
  nameInput.value = userProfileData.userName;
  occupationInput.value = userProfileData.userInfo;
  formValidators[formEditProfile.getAttribute("name")].resetValidation();
});
//слушатель открытия попапа о профайле

buttonOpenPopupAddCard.addEventListener("click", function () {
  formSubmitCard.reset();
  formValidators[formSubmitCard.getAttribute("name")].resetValidation();
  popupWithFormCard.openPopup();
});

const formValidators = {};
const enableValidation = (settings) => {
  const formList = Array.from(document.querySelectorAll(settings.formSelector));
  formList.forEach((formElement) => {
    const validator = new FormValidator(settings, formElement);
    const formName = formElement.getAttribute("name");

    formValidators[formName] = validator;
    validator.enableValidation();
  });
};
enableValidation(settings);
