const initialCards = [
  {
    name: "Архыз",
    alt: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    alt: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    alt: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    alt: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    alt: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    alt: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];
const name = document.querySelector(".popup__input_select_place");
const link = document.querySelector(".popup__input_select_link");
const popupBigImage = document.querySelector(".popup_type_zoom");
const formSubmitCard = document.querySelector(".popup__form_type_add-card");
const popupImage = document.querySelector(".popup__zoom-image");
const popupCaption = document.querySelector(".popup__zoom-caption");
const buttonOpenPopupProfile = document.querySelector(".profile__edit-button");
const editPopup = document.querySelector(".popup_type_edit-profile");
const saveButton = document.querySelector(".popup__button_type_add-card");
const profileName = document.querySelector(".profile__name");
const profileInfo = document.querySelector(".profile__desc-profile");
const userNameInput = document.querySelector(".popup__name");
const userOccupationInput = document.querySelector(".popup__description");
const formElement = document.querySelector(".popup__form_type_edit-profile");
const nameInput = document.querySelector(".popup__input_select_name");
const occupationInput = document.querySelector(
  ".popup__input_select_description"
);
const editPopupCloseButton = document.querySelector(
  ".popup__close_type_edit-profile"
);
const createButton = document.querySelector(".profile__add-button");
const createPopupCloseButton = document.querySelector(
  ".popup__close_type_add-card"
);
const createPopup = document.querySelector(".popup_type_add-card");
const popupBigImageCloseButton = document.querySelector(
  ".popup__close_type_zoom"
);
const cardsContainer = document.querySelector(".cards");

function handleFormSubmitCard(event) {
  event.preventDefault();
  const formSubmitCard = event.target;
  const card = {
    name: name.value,
    link: link.value,
    alt: name.value,
  };
  cardsContainer.prepend(createCard(card)), closePopup(createPopup);
}

function handleDeleteButtonClick(event) {
  const button = event.target;
  const card = button.closest(".card");
  card.remove();
}

function openPopup(popup) {
  popup.classList.add("popup_opened");
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

function handleFormSubmitProfile(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileInfo.textContent = occupationInput.value;
  closePopup(editPopup);
}
function closeBigImage() {
  popupBigImage.classList.remove("popup-zoom_opened");
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
    closePopup(createPopup);
  });
  return element;
}

initialCards.forEach((card) => cardsContainer.append(createCard(card)));

formElement.addEventListener("submit", handleFormSubmitProfile);
buttonOpenPopupProfile.addEventListener("click", function () {
  openPopup(editPopup);
  nameInput.value = profileName.textContent;
  occupationInput.value = profileInfo.textContent;
});
editPopupCloseButton.addEventListener("click", function () {
  closePopup(editPopup);
});
createButton.addEventListener("click", function () {
  openPopup(createPopup);
  formSubmitCard.reset();
});
createPopupCloseButton.addEventListener("click", function () {
  closePopup(createPopup);
});
popupBigImageCloseButton.addEventListener("click", function () {
  closePopup(popupBigImage);
});
formSubmitCard.addEventListener("submit", handleFormSubmitCard);
