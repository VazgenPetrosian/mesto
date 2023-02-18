let editProfileButton = document.querySelector(".profile__edit-button");
let editPopup = document.querySelector(".popup");
editProfileButton.addEventListener("click", function () {
  editPopup.classList.add("popup_opened");
});
function closePopup() {
  editPopup.classList.remove("popup_opened");
}
let saveButton = document.querySelector(".popup__save-button");
let editPopupCloseButton = document.querySelector(".popup__close-button");
editPopupCloseButton.addEventListener("click", closePopup);

let userName = "Жак-Ив Кусто";
let userOccupation = "Исследователь океана";
let profileName = document.querySelector(".profile__name");
let profileInfo = document.querySelector(".profile__desc-profile");
let userNameInput = document.querySelector(".popup__name");
let userOccupationInput = document.querySelector(".popup__description");
let formElement = document.querySelector(".input__container");
let nameInput = document.querySelector(".popup__name");
let occupationInput = document.querySelector(".popup__description");

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileInfo.textContent = occupationInput.value;
  closePopup();
}
formElement.addEventListener("submit", handleFormSubmit);
