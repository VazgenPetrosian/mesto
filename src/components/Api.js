class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _apiResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Код ошибки : ${res.status}`);
    }
  }
  //лайк
  putUserLike(cardId) {
    return fetch(`${this._baseUrl}cards/${cardId}/likes`, {
      method: "PUT",
      headers: this._headers,
    }).then((res) => {
      return this._apiResponse(res);
    });
  }

  deleteUserLike(cardId) {
    return fetch(`${this._baseUrl}cards/${cardId}/likes`, {
      method: "DELETE",
      headers: this._headers,
    }).then((res) => {
      return this._apiResponse(res);
    });
  }
  //лайк
  editProfileInfo({ name, description }) {
    return fetch(`${this._baseUrl}users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        about: description,
      }),
    }).then((res) => {
      return this._apiResponse(res);
    });
  }

  editUserAvatar(avatarUrl) {
    return fetch(`${this._baseUrl}users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: avatarUrl.description,
      }),
    }).then((res) => {
      return this._apiResponse(res);
    });
  }
  //методы с картами
  setNewCard(cardData) {
    return fetch(`${this._baseUrl}cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(cardData),
    }).then((res) => {
      return this._apiResponse(res);
    });
  }

  deleteCard(cardId) {
    return fetch(`${this._baseUrl}cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    }).then((res) => {
      return this._apiResponse(res);
    });
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}cards`, { headers: this._headers }).then(
      (res) => res.json()
    );
  }
  //методы с картами

  getUserData() {
    return fetch(`${this._baseUrl}users/me`, { headers: this._headers }).then(
      (res) => res.json()
    );
  }

  getAllData() {
    return Promise.all([this.getInitialCards(), this.getUserData()]);
  }
}
export { Api };
