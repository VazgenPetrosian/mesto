// текст ошибки
const showInputError = (
  formElement,
  inputElement,
  errorMessage,
  errorClass,
  inputErrorClass
) => {
  const errorElement = formElement.querySelector(
    `.${inputElement.id}-input-error`
  );
  // console.log(errorElement);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(errorClass);
  inputElement.classList.add(inputErrorClass);
};

//скрытие ошибок
const hideInputError = (
  formElement,
  inputElement,
  errorClass,
  inputErrorClass
) => {
  const errorElement = formElement.querySelector(
    `.${inputElement.id}-input-error`
  );
  // console.log(errorElement);
  errorElement.classList.remove(errorClass);
  inputElement.classList.remove(inputErrorClass);
  errorElement.textContent = "";
};

const setEventListeners = (formElement, settings) => {
  const inputList = Array.from(
    formElement.querySelectorAll(settings.inputSelector)
  );
  const buttonElement = formElement.querySelector(
    settings.submitButtonSelector
  );

  toggleButtonState(inputList, buttonElement, settings);

  formElement.addEventListener("reset", () => {
    disabledSubmitButton(buttonElement, settings);
  });

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", (evt) => {
      checkInputValidity(formElement, inputElement, settings);
      toggleButtonState(inputList, buttonElement, settings);
    });
  });
};

//валид не валид

const checkInputValidity = (formElement, inputElement, settings) => {
  if (!inputElement.validity.valid) {
    showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      settings.errorClass,
      settings.inputErrorClass
    );
  } else {
    hideInputError(
      formElement,
      inputElement,
      settings.errorClass,
      settings.inputErrorClass
    );
  }
};

//неактивная
const disabledSubmitButton = (buttonElement, settings) => {
  buttonElement.classList.add(settings.inactiveButtonClass);
  buttonElement.setAttribute("disabled", true);
};

//активная
const enabledSubmitButton = (buttonElement, settings) => {
  buttonElement.classList.remove(settings.inactiveButtonClass);
  buttonElement.removeAttribute("disabled");
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement, settings) => {
  disabledSubmitButton(buttonElement, settings);
  if (!hasInvalidInput(inputList)) {
    enabledSubmitButton(buttonElement, settings);
  } else {
    disabledSubmitButton(buttonElement, settings);
  }
};

const enableValidation = (settings) => {
  const formList = Array.from(document.querySelectorAll(settings.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement, settings);
  });
};

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  errorClass: "popup__input-error_visible",
  inactiveButtonClass: "popup__button_disabled",
  submitButtonSelector: ".popup__button",
  inputErrorClass: "popup__input_type_error",
});
