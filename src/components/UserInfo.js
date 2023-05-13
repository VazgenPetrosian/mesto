class UserInfo {
  constructor({ selectorUserName, selectorUserInfo, selectorUserAvatar }) {
    this._userName = document.querySelector(selectorUserName);
    this._userDescription = document.querySelector(selectorUserInfo);
    this._userAvatar = document.querySelector(selectorUserAvatar);
  }

  getUserInfo() {
    return {
      userName: this._userName.textContent,
      userInfo: this._userDescription.textContent,
    };
  }
  setUserInfo({ userName, userInfo }) {
    this._userName.textContent = userName;
    this._userDescription.textContent = userInfo;
  }
  setUserAvatar(avatarLink) {
    this._userAvatar.src = avatarLink;
  }
}
export { UserInfo };
