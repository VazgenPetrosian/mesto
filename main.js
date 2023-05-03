(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,r){for(var n=0;n<r.length;n++){var o=r[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,r){if("object"!==e(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===e(i)?i:String(i)),o)}var i}var r={formSelector:".popup__form",inputSelector:".popup__input",errorClass:"popup__input-error_visible",inactiveButtonClass:"popup__button_disabled",submitButtonSelector:".popup__button",inputErrorClass:"popup__input_type_error"},n=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formElement=r,this._inputList=Array.from(r.querySelectorAll(t.inputSelector)),this._buttonElement=this._formElement.querySelector(t.submitButtonSelector)}var n,o;return n=e,(o=[{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-input-error"));e.classList.remove(r.inputErrorClass),t.classList.remove(r.errorClass),t.textContent=""}},{key:"_showInputError",value:function(e,t){var n=this._formElement.querySelector(".".concat(e.id,"-input-error"));n.textContent=t,n.classList.add(r.errorClass),e.classList.add(r.inputErrorClass)}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_disabledSubmitButton",value:function(){this._buttonElement.classList.add(r.inactiveButtonClass),this._buttonElement.setAttribute("disabled",!0)}},{key:"_enabledSubmitButton",value:function(){this._buttonElement.classList.remove(r.inactiveButtonClass),this._buttonElement.removeAttribute("disabled")}},{key:"enableValidation",value:function(){this._formElement.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonState(),this._formElement.addEventListener("reset",(function(){e._disabledSubmitButton()})),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._disabledSubmitButton(),this._hasInvalidInput()?this._disabledSubmitButton():this._enabledSubmitButton()}},{key:"resetValidation",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){e._hideInputError(t)}))}}])&&t(n.prototype,o),Object.defineProperty(n,"prototype",{writable:!1}),e}();function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,i=function(e,t){if("object"!==o(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===o(i)?i:String(i)),n)}var i}var u=function(){function e(t,r){var n=t.data,o=t.handleCardClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._card=n,this._name=this._card.name,this._link=this._card.link,this._alt=this._card.name,this._templateSelector=r,this._handleCardClick=o}var t,r;return t=e,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".card").cloneNode(!0)}},{key:"createCard",value:function(){return this._element=this._getTemplate(),this._cardImage=this._element.querySelector(".card__image"),this._cardLike=this._element.querySelector(".card__like"),this._element.querySelector(".card__image").src=this._link,this._element.querySelector(".card__heading").textContent=this._name,this._cardImage.alt=this._alt,this._setEventListeners(),this._element}},{key:"_getLike",value:function(){this._cardLike.classList.toggle("card__like_active")}},{key:"_deleteCard",value:function(){this._element.remove()}},{key:"_setEventListeners",value:function(){var e=this;this._cardImage.addEventListener("click",(function(){e._handleCardClick(e._name,e._link)})),this._element.querySelector(".card__trashcan").addEventListener("click",(function(){e._deleteCard()})),this._cardLike.addEventListener("click",(function(){e._getLike()}))}}])&&i(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,l(n.key),n)}}function l(e){var t=function(e,t){if("object"!==a(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===a(t)?t:String(t)}var s=function(){function e(t){var r,n,o,i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=this,o=function(e){"Escape"===e.key&&i.close()},(n=l(n="_handleEscClose"))in r?Object.defineProperty(r,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[n]=o,this._popup=document.querySelector(t)}var t,r;return t=e,(r=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){t.target.classList.contains("popup_opened")&&e.close(),t.target.classList.contains("popup__close")&&e.close()}))}}])&&c(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==p(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==p(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===p(o)?o:String(o)),n)}var o}function y(){return y="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=d(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},y.apply(this,arguments)}function m(e,t){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},m(e,t)}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}var v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&m(e,t)}(u,e);var t,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(n);if(o){var r=d(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===p(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupImage=t._popup.querySelector(".popup__zoom-image"),t._popupCaption=t._popup.querySelector(".popup__zoom-caption"),t}return t=u,(r=[{key:"open",value:function(e,t){y(d(u.prototype),"open",this).call(this),this._popupImage.src=t,this._popupCaption.textContent=e,this._popupImage.alt=e}}])&&f(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(s);function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function _(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==b(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==b(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===b(o)?o:String(o)),n)}var o}function h(){return h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=g(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},h.apply(this,arguments)}function S(e,t){return S=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},S(e,t)}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}var w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&S(e,t)}(u,e);var t,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=g(n);if(o){var r=g(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===b(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e,t){var r,n=t.submitForm;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,e))._formElement=r._popup.querySelector(".popup__form"),r._inputList=Array.from(r._formElement.querySelectorAll(".popup__input")),r._submitForm=n,r}return t=u,(r=[{key:"_getInputValues",value:function(){var e=new Object;return this._inputList.forEach((function(t){e[t.name]=t.value})),e}},{key:"setEventListeners",value:function(){var e=this;h(g(u.prototype),"setEventListeners",this).call(this),this._formElement.addEventListener("submit",(function(t){t.preventDefault(),e._submitForm(e._getInputValues())}))}},{key:"close",value:function(){h(g(u.prototype),"close",this).call(this),this._formElement.reset()}}])&&_(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(s);function E(e){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E(e)}function k(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==E(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==E(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===E(o)?o:String(o)),n)}var o}var j=function(){function e(t){var r=t.selectorUserName,n=t.selectorUserInfo;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=document.querySelector(r),this._userDescription=document.querySelector(n)}var t,r;return t=e,(r=[{key:"getUserInfo",value:function(){return{userName:this._userName.textContent,userInfo:this._userDescription.textContent}}},{key:"setUserInfo",value:function(e){var t=e.userName,r=e.userInfo;this._userName.textContent=t,this._userDescription.textContent=r}}])&&k(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function O(e){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(e)}function P(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==O(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==O(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===O(o)?o:String(o)),n)}var o}var C=function(){function e(t,r){var n=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._selectContainer=r,this._items=n,this._renderer=o}var t,r;return t=e,(r=[{key:"renderItems",value:function(){var e=this;this._items.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(e){this._selectContainer.prepend(e)}}])&&P(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}(),L=document.forms["card-form"],I=document.querySelector(".profile__edit-button"),q=document.querySelector(".profile__name"),x=document.querySelector(".profile__desc-profile"),T=document.forms["edit-form"],B=document.querySelector(".popup__input_select_name"),R=document.querySelector(".popup__input_select_description"),A=document.querySelector(".profile__add-button"),D=new C({items:[{name:"Архыз",alt:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",alt:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",alt:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",alt:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",alt:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",alt:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:function(e){var t=V(e);D.addItem(t)}},document.querySelector(".cards"));D.renderItems();var N=new w(".popup_type_edit-profile",{submitForm:function(e){q.textContent=e.name,x.textContent=e.description,N.close()}});function V(e){return new u({data:e,handleCardClick:function(e,t){F.open(e,t)}},"#templateID").createCard()}N.setEventListeners();var U=new w(".popup_type_add-card",{submitForm:function(e){var t={name:e.name,link:e.description};D.addItem(V(t)),U.close()}});U.setEventListeners();var F=new v(".popup_type_zoom");F.setEventListeners();var z=new j({selectorUserName:".profile__name",selectorUserInfo:".profile__desc-profile"});I.addEventListener("click",(function(){var e=z.getUserInfo();N.open(),B.value=e.userName,R.value=e.userInfo,M[T.getAttribute("name")].resetValidation()})),A.addEventListener("click",(function(){L.reset(),M[L.getAttribute("name")].resetValidation(),U.open()}));var M={};!function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){var r=new n(e,t),o=t.getAttribute("name");M[o]=r,r.enableValidation()}))}(r)})();
//# sourceMappingURL=main.js.map