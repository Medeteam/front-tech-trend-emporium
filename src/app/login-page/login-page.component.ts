import { Component } from '@angular/core';
import { ButtonComponent } from '../components/shared/button/button.component';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

}
