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
const cardsContainer = document.querySelector(".cards");

// initialCards.forEach(function (card) {});
// initialCards.forEach((card) => cardsContainer.append(createCard(card)));
const createCard = (card) => {
  const cardTemplate = document
    .querySelector("template")
    .content.cloneNode(true);
  const cardHeading = cardTemplate.querySelector(".card__heading");
  cardHeading.textContent = card.name;
  const cardImage = cardTemplate.querySelector(".card__image");
  cardImage.setAttribute("src", card.link);
  cardImage.setAttribute("alt", card.alt);
  const likeButton = cardTemplate.querySelector(".card__like");
  const getLike = () => {
    likeButton.classList.toggle("card__like_active");
  };
  likeButton.addEventListener("click", getLike);
  const deleteButton = cardTemplate.querySelector(".card__trashcan");
  deleteButton.addEventListener("click", handleDeleteButtonClick);
  const popupImage = document.querySelector(".popup-zoom__image");
  const popupCaption = document.querySelector(".popup-zoom__caption");
  // popupImage.setAttribute("src", card.link);
  // popupCaption.textContent = card.alt;
  cardImage.addEventListener("click", () => {
    popupImage.setAttribute("src", card.link);
    popupCaption.textContent = card.name;
    // popupCaption.textContent = card.textContent;
    openBigImage();
    closeCreatePopup();
  });
  cardsContainer.prepend(cardTemplate);
};

initialCards.forEach((card) => cardsContainer.append(createCard(card)));
// initialCards.forEach(createCard);

const createForm = document.querySelector(".popup-add__form");
createForm.addEventListener("submit", handleFormSubmitPopup);
function handleFormSubmitPopup(event) {
  event.preventDefault();
  const createform = event.target;
  const name = createForm.querySelector(".popup-add__input_select_name").value;
  const link = createForm.querySelector(".popup-add__input_select_link").value;
  const card = {
    name: name,
    link: link,
  };
  createCard(card), closeCreatePopup();
}
function handleDeleteButtonClick(event) {
  const button = event.target;
  const card = button.closest(".card");
  card.remove();
}
const popupBigImage = document.querySelector(".popup-zoom");
function openBigImage() {
  popupBigImage.classList.add("popup-zoom_opened");
}
let editProfileButton = document.querySelector(".profile__edit-button");
let editPopup = document.querySelector(".popup");
let saveButton = document.querySelector(".popup__save-button");
let profileName = document.querySelector(".profile__name");
let profileInfo = document.querySelector(".profile__desc-profile");
let userNameInput = document.querySelector(".popup__name");
let userOccupationInput = document.querySelector(".popup__description");
let formElement = document.querySelector(".popup__form");
let nameInput = document.querySelector(".popup__input_select_name");
let occupationInput = document.querySelector(
  ".popup__input_select_description"
);
let editPopupCloseButton = document.querySelector(".popup__close");
let createButton = document.querySelector(".profile__add-button");
let createPopupCloseButton = document.querySelector(".popup-add__close");
let createPopup = document.querySelector(".popup-add");
const popupBigImageCloseButton = document.querySelector(".popup-zoom__close");

function closeCreatePopup() {
  createPopup.classList.remove("popup-add_opened");
}
function openCreatePopup() {
  createPopup.classList.add("popup-add_opened");
}

function closePopup() {
  editPopup.classList.remove("popup_opened");
}
function openPopup() {
  editPopup.classList.add("popup_opened");
  nameInput.value = profileName.textContent;
  occupationInput.value = profileInfo.textContent;
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileInfo.textContent = occupationInput.value;
  closePopup();
}
function closeBigImage() {
  popupBigImage.classList.remove("popup-zoom_opened");
}
formElement.addEventListener("submit", handleFormSubmit);
editProfileButton.addEventListener("click", function () {
  editPopup.classList.add("popup_opened");
  nameInput.value = profileName.textContent;
  occupationInput.value = profileInfo.textContent;
});
editPopupCloseButton.addEventListener("click", closePopup);
createButton.addEventListener("click", openCreatePopup);
createPopupCloseButton.addEventListener("click", closeCreatePopup);
popupBigImageCloseButton.addEventListener("click", closeBigImage);
