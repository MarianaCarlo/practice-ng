import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    if (this.authService.verifyLogged) {
      this.router.navigate(['pages1']);
    }
  }

  onLogin(form: any): void {
    console.log('FORM: ', form.value);

    this.authService.login({
      email: form.value.email,
      password: form.value.password,
      returnSecureToken: true
    }).subscribe(
      res => {
        console.log('LOGIN RESPONSE: ', res);
        this.router.navigate(['pages1']);
      },
      err => {
        console.log('ERROR DE SERVIDOR');
      }
    );
  }

}
