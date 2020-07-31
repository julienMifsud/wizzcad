import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from '@core/services/login/login.service';
import { UnsubscribeComponent } from '@shared/components/unsubscribe/unsubscribe.component';
import { takeUntil } from 'rxjs/operators';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent extends UnsubscribeComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private loginService: LoginService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    super();
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      login: [null, [Validators.required]],
      password: [null, Validators.required],
    });
  }

  login() {
    this.loginService
      .connection(this.loginForm.value.login, this.loginForm.value.password)
      .pipe(takeUntil(this._subject))
      .subscribe((data) => {
        this.loginService.token = data[0].token;
        this.router.navigate(['content']);
      });
  }
}
