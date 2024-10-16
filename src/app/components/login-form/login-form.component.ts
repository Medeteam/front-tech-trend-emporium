import { Component } from '@angular/core';
import { ButtonComponent } from '../shared/button/button.component';
import { LoginService } from '../../services/login.service';
import { Login } from '../../interfaces/login';
import { LocalStorageService } from '../../services/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  constructor(
    private loginService: LoginService,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

  login(loginData: Login) {
    this.loginService.login(loginData).subscribe(
      response => {
        console.log('Login successful', response);
        const {token, email, username} = response;
        this.localStorageService.setItem('username', username);
        this.router.navigate(['/']);
      },
      error => {
        console.error('Login failed', error);
      }
    );
  }
}
