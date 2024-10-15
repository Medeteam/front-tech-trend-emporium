import { Component } from '@angular/core';
import { ButtonComponent } from '../shared/button/button.component';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  sayHi(){
    console.log("Hello");    
  }
  sayBye(){
    console.log("Bye");    
  }
}
