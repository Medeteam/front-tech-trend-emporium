import { Component, Input } from '@angular/core';
import { LoginPageComponent } from '../login-page/login-page.component';
import { SignupPageComponent } from '../signup-page/signup-page.component';

@Component({
  selector: 'app-auth-form',
  standalone: true,
  imports: [LoginPageComponent, SignupPageComponent],
  templateUrl: './auth-form.component.html',
  styleUrl: './auth-form.component.css'
})
export class AuthFormComponent {
  @Input() form: "signup" | "login" | undefined;
}
