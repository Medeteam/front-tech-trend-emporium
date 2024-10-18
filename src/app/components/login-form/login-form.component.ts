import { Component } from '@angular/core';
import { ButtonComponent } from '../shared/button/button.component';
import { LoginService } from '../../services/login.service';
import { Login } from '../../interfaces/login';
import { LocalStorageService } from '../../services/local-storage.service';
import { Router } from '@angular/router';
import { SimpleAlertComponent } from '../shared/simple-alert/simple-alert.component';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ButtonComponent, SimpleAlertComponent],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  alertText: string = '';
  alertType: 'success' | 'error' = 'error';

  constructor(
    private loginService: LoginService,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

  async login(loginData: Login) {
    await this.loginService.login(loginData).subscribe(
      response => {
        console.log('Login successful', response);
        const {username, role, id} = response;
        this.localStorageService.setItem('username', username);
        this.localStorageService.setItem('role', role);
        this.localStorageService.setItem('id', id);
        this.router.navigate(['/']);
      },
      error => {
        console.error('Login failed', error);
        this.alertText = 'Credentials are not valid';
      }
    );
  }
}
