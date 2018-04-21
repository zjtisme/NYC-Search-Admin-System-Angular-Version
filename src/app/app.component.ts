import { Component } from '@angular/core';
import { LoginStateService } from './service/login-state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private loginStateService: LoginStateService,
              private router: Router) {}

  ngOnInit() {
    let curState = localStorage.getItem("ng-login");
    if(curState) {
      let parsedState = JSON.parse(curState);
      this.loginStateService.setLoginState(parsedState.loginState);
      this.loginStateService.setId(parsedState.id);
      this.loginStateService.setUserName(parsedState.userName);
      this.loginStateService.setPassword(parsedState.password);
      this.loginStateService.setFirstName(parsedState.firstName);
      this.loginStateService.setLastName(parsedState.lastName);
      this.loginStateService.setEmail(parsedState.email);
      this.loginStateService.setGender(parsedState.gender);
      this.loginStateService.setPhoneNumber(parsedState.phoneNumber);
      this.loginStateService.setBirthday(parsedState.birthday);
      this.router.navigateByUrl("/account");
    } else {
      this.loginStateService.setLoginState(false);
      this.loginStateService.setId(0);
      this.loginStateService.setUserName("");
      this.loginStateService.setPassword("");
      this.loginStateService.setFirstName("");
      this.loginStateService.setLastName("");
      this.loginStateService.setEmail("");
      this.loginStateService.setGender("");
      this.loginStateService.setPhoneNumber("");
      this.loginStateService.setBirthday("");
    }
  }
}
