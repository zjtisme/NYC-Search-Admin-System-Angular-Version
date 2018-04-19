import { Component, OnInit } from '@angular/core';
import { LoginStateService } from '../service/login-state.service';
import { UserConfigureService } from '../service/user-configure.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-configure-page',
  templateUrl: './configure-page.component.html',
  styleUrls: ['./configure-page.component.css']
})
export class ConfigurePageComponent implements OnInit {
  id: number;
  userName: string;
  password1: string;
  password2: string;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  phoneNumber: string;
  birthday: string;
  errorMsg: string;
  constructor(private loginStateService: LoginStateService,
              private userConfigureService: UserConfigureService,
              private router: Router) { }

  ngOnInit() {
    this.id = this.loginStateService.getId();
    this.userName = this.loginStateService.getUserName();
    this.password1 = this.loginStateService.getPassword();
    this.password2 = this.loginStateService.getPassword();
    this.firstName = this.loginStateService.getFirstName();
    this.lastName = this.loginStateService.getLastName();
    this.email = this.loginStateService.getEmail();
    this.gender = this.loginStateService.getGender();
    this.phoneNumber = this.loginStateService.getPhoneNumber();
    this.birthday = this.loginStateService.getBirthday();
    this.errorMsg = this.loginStateService.getConfigureError();
  }

  handleConfigure() {
    if(this.userName.length === 0 || this.password1.length === 0 || this.password2.length === 0 || this.firstName.length === 0
      || this.lastName.length === 0 || this.email.length === 0 || this.gender.length === 0 || this.phoneNumber.length === 0
      || this.birthday.length === 0) {
        this.loginStateService.setConfigureError("All fields are required!");
        this.errorMsg = this.loginStateService.getConfigureError();
        return;
      }

    if(this.password1 !== this.password2) {
      this.loginStateService.setConfigureError("Two passwords didn't match!");
      this.errorMsg = this.loginStateService.getConfigureError();
      return;
    }

    let updatedUser = {
      "userName": this.userName,
      "password": this.password1,
      "firstName": this.firstName,
      "lastName": this.lastName,
      "email": this.email,
      "gender": this.gender,
      "phoneNumber": this.phoneNumber,
      "birthday": this.birthday
    }

    this.userConfigureService.createUpdateUserObservable(this.id, updatedUser)
      .subscribe(response => {
        let cand = response.json();
        this.loginStateService.setUserName(cand.userName);
        this.loginStateService.setPassword(cand.password);
        this.loginStateService.setFirstName(cand.firstName);
        this.loginStateService.setLastName(cand.lastName);
        this.loginStateService.setGender(cand.gender);
        this.loginStateService.setEmail(cand.email);
        this.loginStateService.setPhoneNumber(cand.phoneNumber);
        this.loginStateService.setBirthday(cand.birthday);
        this.loginStateService.setConfigureError("");
        this.errorMsg = this.loginStateService.getConfigureError();
        this.router.navigateByUrl("/account");
      });
  }

}
