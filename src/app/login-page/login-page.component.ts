import { Component, OnInit } from '@angular/core';
import { UserLoginService } from '../service/user-login.service';
import { LoginStateService } from '../service/login-state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  errorMsg:string = "";
  username:string = "";
  password:string = "";
  constructor(private userLoginService: UserLoginService,
              private loginStateService: LoginStateService,
              private router: Router) { }

  ngOnInit() {
  }

  handleLogin(username:string, password:string) {
    if(username.length === 0 || password.length === 0) {
      this.loginStateService.setLoginError("All fields are required!");
      this.errorMsg = this.loginStateService.getLoginError();
      return;
    }

    this.userLoginService.createFindUserByNameObservable(username)
      .subscribe(response => {
        let candArr = response.json();
        if(candArr.length === 0) {
          this.loginStateService.setLoginError("No such user, please register first!");
          this.errorMsg = this.loginStateService.getLoginError();
        } else {
          let cand = candArr[0];
          this.userLoginService.createCheckPasswordObservable(cand, password)
            .subscribe(checkRes => {
              if(!checkRes.json()) {
                this.loginStateService.setLoginError("Error username or password, please try again!");
                this.errorMsg = this.loginStateService.getLoginError();
              } else {
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
                this.loginStateService.setLoginError("");
                this.errorMsg = this.loginStateService.getLoginError();
                this.router.navigateByUrl("/account");
              }
            });
        }
      });

  }

}
