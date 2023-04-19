import "./index.css";
import { initialCards } from "../components/constants.js";
import { FormValidator, settings } from "../components/FormValidator.js";
import { Card } from "../components/Card.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import { Section } from "../components/Section.js";

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
const cardsList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const startCard = new Card(
        {
          data: item,
          handleCardClick: (name, link) => {
            popupCardBigImage.open(name, link);
          },
        },
        "#templateID"
      );
      const cardElement = startCard.createCard();
      cardsList.addItem(cardElement);
    },
  },
  cardsContainer
);
cardsList.renderItems();
//класс Section добавляет карточки обрабатывая массив

//экземпляры попапов с формой
const popupWithFormProfile = new PopupWithForm(".popup_type_edit-profile", {
  submitForm: (userData) => {
    profileName.textContent = userData["name"];
    profileInfo.textContent = userData["description"];
    popupWithFormProfile.close();
  },
});
popupWithFormProfile.setEventListeners();

const popupWithFormCard = new PopupWithForm(".popup_type_add-card", {
  submitForm: (inputValues) => {
    //передается inputValues из PopupWithForm
    const newCard = new Card(
      {
        data: { name: inputValues.name, link: inputValues.description },
        handleCardClick: (name, link) => {
          popupCardBigImage.open(name, link);
        },
      },
      "#templateID"
    );
    const cardiB = newCard.createCard();
    cardsList.addItem(cardiB);
    popupWithFormCard.close();
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
  popupWithFormProfile.open();
  nameInput.value = userProfileData.userName;
  occupationInput.value = userProfileData.userInfo;
  formValidators[formEditProfile.getAttribute("name")].resetValidation();
});
//слушатель открытия попапа о профайле

buttonOpenPopupAddCard.addEventListener("click", function () {
  formSubmitCard.reset();
  formValidators[formSubmitCard.getAttribute("name")].resetValidation();
  popupWithFormCard.open();
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
