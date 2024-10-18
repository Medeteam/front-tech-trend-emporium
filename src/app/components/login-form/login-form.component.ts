import { Component, ElementRef, ViewChild } from '@angular/core';
import { ButtonComponent } from '../shared/button/button.component';
import { LoginService } from '../../services/login.service';
import { Login } from '../../interfaces/login';
import { LocalStorageService } from '../../services/local-storage.service';
import { Router } from '@angular/router';
import { SimpleAlertComponent } from '../shared/simple-alert/simple-alert.component';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ButtonComponent, SimpleAlertComponent],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  @ViewChild('username') usernameInput!: ElementRef;
  @ViewChild('password') passwordInput!: ElementRef;
  alertText: string = '';
  alertType: 'success' | 'error' = 'error';

  constructor(
    private loginService: LoginService,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

  async login() {
    const usernameText = this.usernameInput.nativeElement.value;
    const passwordText = this.passwordInput.nativeElement.value;

    const loginData: Login = {
      username: usernameText,
      password: passwordText
    };

    await this.loginService.login(loginData).subscribe(
      response => {
        console.log('Login successful', response);
        const {id, username, role} = response;
        this.localStorageService.setItem('username', username);
        this.localStorageService.setItem('userId', id);
        this.localStorageService.setItem('role', role);
        this.router.navigate(['/']).then(
          () => {window.location.reload();}
        );
      },
      error => {
        console.error('Login failed', error);
        this.alertText = 'Credentials are not valid';
      }
    );
  }
}
