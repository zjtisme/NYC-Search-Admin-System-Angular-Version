import { Component, OnInit } from '@angular/core';
import { UserSignupService } from '../service/user-signup.service';
import { LoginStateService } from '../service/login-state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {
  userName: string = "";
  password1: string = "";
  password2: string = "";
  firstName: string = "";
  lastName: string = "";
  email: string = "";
  gender: string = "";
  phoneNumber: string = "";
  birthday: string = "";
  errorMsg: string = "";
  constructor(private userSignupService: UserSignupService,
              private loginStateService: LoginStateService,
              private router: Router) { }

  ngOnInit() {
  }

  handleSignup() {
    if(this.userName.length === 0 || this.password1.length === 0 || this.password2.length === 0 || this.firstName.length === 0
      || this.lastName.length === 0 || this.email.length === 0 || this.gender.length === 0 || this.phoneNumber.length === 0
      || this.birthday.length === 0) {
        this.loginStateService.setSignupError("All fields are required!");
        this.errorMsg = this.loginStateService.getSignupError();
        return;
      }

    if(this.password1 !== this.password2) {
      this.loginStateService.setSignupError("Two passwords didn't match!");
      this.errorMsg = this.loginStateService.getSignupError();
      return;
    }

    let newUser = {
      "userName": this.userName,
      "password": this.password1,
      "firstName": this.firstName,
      "lastName": this.lastName,
      "email": this.email,
      "gender": this.gender,
      "phoneNumber": this.phoneNumber,
      "birthday": this.birthday
    };

    this.userSignupService.createSignupUserObservable(newUser)
      .subscribe(response => {
        let cand = response.json();
        this.loginStateService.setLoginState(true);
        this.loginStateService.setId(cand.id);
        this.loginStateService.setUserName(cand.userName);
        this.loginStateService.setPassword(cand.password);
        this.loginStateService.setFirstName(cand.firstName);
        this.loginStateService.setLastName(cand.lastName);
        this.loginStateService.setGender(cand.gender);
        this.loginStateService.setEmail(cand.email);
        this.loginStateService.setPhoneNumber(cand.phoneNumber);
        this.loginStateService.setBirthday(cand.birthday);
        this.loginStateService.setSignupError("");
        localStorage.setItem('ng-login', JSON.stringify(this.loginStateService.getLoginUserInfo()));
        this.errorMsg = this.loginStateService.getSignupError();
        this.router.navigateByUrl("/account");
      });

  }

}
