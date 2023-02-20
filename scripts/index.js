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
formElement.addEventListener("submit", handleFormSubmit);

editProfileButton.addEventListener("click", openPopup);
editPopupCloseButton.addEventListener("click", closePopup);
