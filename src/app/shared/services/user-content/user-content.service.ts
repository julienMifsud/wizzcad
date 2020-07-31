import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from '@core/services/login/login.service';

@Injectable({
  providedIn: 'root',
})
export class UserContentService {
  constructor(private http: HttpClient, private loginService: LoginService) {}

  get() {
    return this.http.get(
      `http://dev4.wizzcad.com:8081/${this.loginService.token}`
    );
  }
}
