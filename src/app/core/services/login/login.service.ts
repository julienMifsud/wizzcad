import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { KEYS } from '@shared/constants/local-storage';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private _token: string;
  constructor(private http: HttpClient) {
    this._token = localStorage.getItem(KEYS.TOKEN);
  }

  connection(login: string, password: string) {
    return this.http.get('http://demo.wizzcad.com:8081/logins', {
      params: { login, password },
    });
  }

  get token() {
    return this._token;
  }

  set token(token: string) {
    localStorage.setItem(KEYS.TOKEN, token);
    this._token = token;
  }
}
