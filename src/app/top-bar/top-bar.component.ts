import { Component, OnInit } from '@angular/core';
import { LoginStateService } from '../service/login-state.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  login: boolean = false;
  greetings;
  constructor(private loginStateService: LoginStateService,
      private router: Router, private location: Location) {
        router.events.subscribe((val) => {
          if(location.path().indexOf("/account") === 0){
            this.login = true;
            this.greetings = "Welcome "+loginStateService.getUserName()+"!";
          } else if(location.path().indexOf("/account") !== 0) {
            this.login = false;
            this.greetings = "";
          }
        });
      }

  ngOnInit() {
  }

  handleLogout() {
    this.loginStateService.resetLoginInfo();
    localStorage.removeItem('ng-login');
    this.router.navigateByUrl("/");
  }


}
