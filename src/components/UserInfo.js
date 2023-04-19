class UserInfo {
  constructor({ selectorUserName, selectorUserInfo }) {
    this._userName = document.querySelector(selectorUserName);
    this._userDescription = document.querySelector(selectorUserInfo);
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
}
export { UserInfo };
