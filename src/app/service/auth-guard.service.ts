import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { LoginStateService } from './login-state.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(public loginStateService: LoginStateService, public router: Router) {}

  canActivate(): boolean {
    if(!this.loginStateService.getLoginState()) {
      this.router.navigateByUrl("/");
      return false;
    }
    return true;
  }
}
