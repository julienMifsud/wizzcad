import { Injectable } from '@angular/core';
import { CanActivateChild, Router, UrlTree } from '@angular/router';
import { LoginService } from '@core/services/login/login.service';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivateChild {
  constructor(private router: Router, private loginService: LoginService) {}

  public canActivateChild(): boolean | UrlTree {
    if (this.loginService.token) {
      return this.router.createUrlTree(['content']);
    }
    return true;
  }
}
