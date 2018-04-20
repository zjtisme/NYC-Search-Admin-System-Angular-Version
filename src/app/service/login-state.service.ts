import { Injectable } from '@angular/core';

@Injectable()
export class LoginStateService {

    loginUserInfo = {
      "loginState": false,
      "id": 0,
      "userName": "",
      "password": "",
      "firstName": "",
      "lastName": "",
      "gender": "",
      "email": "",
      "phoneNumber": "",
      "birthday": "",
      "loginError": "",
      "signupError": "",
      "configureError": ""
    };

  getLoginUserInfo() {
    return this.loginUserInfo;
  }

  setLoginError(error) {
     this.loginUserInfo.loginError = error;
  }

  getLoginError() {
    return this.loginUserInfo.loginError;
  }

  setLoginState(state) {
    this.loginUserInfo.loginState = state;
  }

  getLoginState() {
    return this.loginUserInfo.loginState;
  }

  setId(id) {
    this.loginUserInfo.id = id;
  }

  getId() {
    return this.loginUserInfo.id;
  }

  setUserName(username) {
    this.loginUserInfo.userName = username;
  }

  getUserName() {
    return this.loginUserInfo.userName;
  }

  setPassword(password) {
    this.loginUserInfo.password = password;
  }

  getPassword() {
    return this.loginUserInfo.password;
  }

  setFirstName(firstname) {
    this.loginUserInfo.firstName = firstname;
  }

  getFirstName() {
    return this.loginUserInfo.firstName;
  }

  setLastName(lastname) {
    this.loginUserInfo.lastName = lastname;
  }

  getLastName() {
    return this.loginUserInfo.lastName;
  }

  setGender(gender) {
    this.loginUserInfo.gender = gender;
  }

  getGender() {
    return this.loginUserInfo.gender;
  }

  setEmail(email) {
    this.loginUserInfo.email = email;
  }

  getEmail() {
    return this.loginUserInfo.email;
  }

  setPhoneNumber(phone) {
    this.loginUserInfo.phoneNumber = phone;
  }

  getPhoneNumber() {
    return this.loginUserInfo.phoneNumber;
  }

  setBirthday(birthday) {
    this.loginUserInfo.birthday = birthday;
  }

  getBirthday() {
    return this.loginUserInfo.birthday;
  }

  setSignupError(error) {
    this.loginUserInfo.signupError = error;
  }

  getSignupError() {
    return this.loginUserInfo.signupError;
  }

  setConfigureError(error) {
    this.loginUserInfo.configureError = error;
  }

  getConfigureError() {
    return this.loginUserInfo.configureError;
  }

  resetLoginInfo() {
    let originalState = {
      "loginState": false,
      "id": 0,
      "userName": "",
      "password": "",
      "firstName": "",
      "lastName": "",
      "gender": "",
      "email": "",
      "phoneNumber": "",
      "birthday": "",
      "loginError": "",
      "signupError": "",
      "configureError": ""
    };
    this.loginUserInfo = originalState;
  }
}
