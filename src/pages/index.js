import "./index.css";
import { initialCards, apiToken } from "../utils/constants.js";
import { FormValidator, settings } from "../components/FormValidator.js";
import { Card } from "../components/Card.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import { Section } from "../components/Section.js";
import { Api } from "../components/Api.js";
import { PopupWithConform } from "../components/PopupWithConform.js";

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
const buttonEditAvatarPic = document.querySelector(".profile__avatar-button");

//временный попап на аватар
const popupEditAvatarPic = new PopupWithForm(".popup_type_avatar", {
  submitForm: (cardId) => {
    popupEditAvatarPic.renderLoading(true);
    api
      .editUserAvatar(cardId)
      .then((res) => {
        userProfileInfo.setUserAvatar(res.avatar);
        popupEditAvatarPic.close();
      })
      .catch((error) => {
        console.warn(
          `Ошибка установки аватара: ${error} - ${error.statusText}`
        );
      })
      .finally(() => popupEditAvatarPic.renderLoading(false));
  },
});

popupEditAvatarPic.setEventListeners();
buttonEditAvatarPic.addEventListener("click", () => {
  popupEditAvatarPic.open();
});
//временный попап на аватар

const cardList = new Section(
  {
    renderer: (cardItem) => {
      cardList.addItem(createCard(cardItem));
    },
  },
  cardsContainer
);

const api = new Api(apiToken);
api.getAllData().then((card) => {
  const [cards, userData] = card;
  userId = userData._id;
  const profileInfoApi = {
    userName: userData.name,
    userInfo: userData.about,
  };
  userProfileInfo.setUserInfo(profileInfoApi);
  userProfileInfo.setUserAvatar(userData.avatar);
  cardList.renderItems(cards);
});
//мой userId;
let userId;
//экземпляры попапов с формой
const popupWithFormProfile = new PopupWithForm(".popup_type_edit-profile", {
  submitForm: (userData) => {
    api.editProfileInfo(userData).then((res) => {
      const newUserData = { userName: res.name, userInfo: res.about };
      userProfileInfo.setUserInfo(newUserData);
      popupWithFormProfile.close();
    });
  },
});
popupWithFormProfile.setEventListeners();
//отдельная функция создающая карточку и передается дальше
function createCard(item) {
  const card = new Card(
    {
      data: item,
      handleCardClick: (name, link) => {
        popupCardBigImage.open(name, link);
      },
    },
    userId,
    {
      handleCardLikes: () => {
        if (card.hasMyLike()) {
          api
            .deleteUserLike(item._id)
            .then((item) => {
              console.log(item);
              card.isNotLiked();
              card.showCardLikes(item.likes);
            })
            .catch((error) => {
              console.error(
                `Ошибка снятия лайка: ${error.status} - ${error.statusText}`
              );
            });
        } else {
          api
            .putUserLike(item._id)
            .then((item) => {
              console.log(item);
              card.isLiked();
              card.showCardLikes(item.likes);
            })
            .catch((error) => {
              console.error(
                `Ошибка проставления лайка: ${error.status} - ${error.statusText}`
              );
            });
        }
      },
    },
    {
      handleCardDelete: () => {
        popupWithConformDelete.open();
        popupWithConformDelete.handleSubmit(() => {
          api
            .deleteCard(item._id)
            .then(() => {
              card.deleteCard();
              popupWithConformDelete.close();
            })
            .catch((error) => {
              console.error(
                `Ошибка удаления карточки: ${error.status} - ${error.statusText}`
              );
            });
        });
      },
    },
    "#templateID"
  );
  const cardElement = card.createCard();
  return cardElement;
}
//подтврждение удаления
const popupWithConformDelete = new PopupWithConform(".popup_type_deleteCard", {
  submitForm: (cardId) => {
    api
      .deleteCard(cardId)
      .then(() => {
        popupWithConformDelete.close();
      })
      .catch((error) => {
        console.warn(
          `ошибка подтверждения удаления карточки: ${error.status} - ${error.statusText}`
        );
      });
  },
});
popupWithConformDelete.setEventListeners();
//подтверждени удаления
const popupWithFormCard = new PopupWithForm(".popup_type_add-card", {
  submitForm: (inputValues) => {
    const newCard = {
      name: inputValues.name,
      link: inputValues.description,
    };
    console.log(newCard);
    popupWithFormCard.renderLoading(true);
    api
      .setNewCard(newCard)
      .then((res) => {
        console.log(res);
        const card = createCard(res);
        cardList.addItem(card);
        // const cardElement = createCard(res);
        // cardList.addItem(cardElement);
        popupWithFormCard.close();
      })
      .catch((err) => {
        console.warn(
          `Ошибка загрузки карточки: ${err.status} - ${err.statusText}`
        );
      })
      .finally(() => popupWithFormCard.renderLoading(false));
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
  selectorUserAvatar: ".profile__avatar",
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
