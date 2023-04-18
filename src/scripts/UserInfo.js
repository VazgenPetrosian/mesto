class UserInfo {
  constructor({ selectorUserName, selectorUserInfo }) {
    this._selectorUserName = document.querySelector(selectorUserName);
    this._selectorUserInfo = document.querySelector(selectorUserInfo);
  }

  getUserInfo() {
    return {
      userName: this._selectorUserName.textContent,
      userInfo: this._selectorUserInfo.textContent,
    };
  }
  setUserInfo({ userName, userInfo }) {
    this._selectorUserName.textContent = userName;
    this._selectorUserInfo.textContent = userInfo;
  }
}
export { UserInfo };
