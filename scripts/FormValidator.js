const settings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  errorClass: "popup__input-error_visible",
  inactiveButtonClass: "popup__button_disabled",
  submitButtonSelector: ".popup__button",
  inputErrorClass: "popup__input_type_error",
};

class FormValidator {
  constructor(settings, formElement) {
    // this.settings = settings;
    this._formElement = formElement;
    this._inputList = Array.from(
      formElement.querySelectorAll(settings.inputSelector)
    );
    this._buttonElement = this._formElement.querySelector(
      settings.submitButtonSelector
    );
  }

  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(
      `.${inputElement.id}-input-error`
    );
    inputElement.classList.remove(settings.inputErrorClass);
    errorElement.classList.remove(settings.errorClass);
    errorElement.textContent = "";
  }
  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(
      `.${inputElement.id}-input-error`
    );
    errorElement.textContent = errorMessage;
    errorElement.classList.add(settings.errorClass);
    inputElement.classList.add(settings.inputErrorClass);
  }
  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _disabledSubmitButton() {
    this._buttonElement.classList.add(settings.inactiveButtonClass);
    this._buttonElement.setAttribute("disabled", true);
  }

  _enabledSubmitButton() {
    this._buttonElement.classList.remove(settings.inactiveButtonClass);
    this._buttonElement.removeAttribute("disabled");
  }

  enableValidation() {
    const formList = Array.from(
      document.querySelectorAll(settings.formSelector)
    );
    formList.forEach((formElement) => {
      formElement.addEventListener("submit", (evt) => {
        evt.preventDefault();
      });
      this._setEventListeners();
    });
  }

  _setEventListeners() {
    this._toggleButtonState();

    this._formElement.addEventListener("reset", () => {
      this._disabledSubmitButton();
    });
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _toggleButtonState() {
    this._disabledSubmitButton();
    if (!this._hasInvalidInput()) {
      this._enabledSubmitButton();
    } else {
      this._disabledSubmitButton();
    }
  }
}
export { FormValidator, settings };
