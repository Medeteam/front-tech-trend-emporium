import { Component, ElementRef, ViewChild } from '@angular/core';
import { ButtonComponent } from '../shared/button/button.component';
import { Signup } from '../../interfaces/signup';
import { SignupService } from '../../services/signup.service';
import { Router } from '@angular/router';
import { SimpleAlertComponent } from '../shared/simple-alert/simple-alert.component';

@Component({
  selector: 'app-signup-form',
  standalone: true,
  imports: [ButtonComponent, SimpleAlertComponent],
  templateUrl: './signup-form.component.html',
  styleUrl: './signup-form.component.css'
})
export class SignupFormComponent {
  @ViewChild('username') usernameInput!: ElementRef;
  @ViewChild('email') emailInput!: ElementRef;
  @ViewChild('password') passwordInput!: ElementRef;
  @ViewChild('repeatPassword') repeatpasswordInput!: ElementRef;
  @ViewChild('questionSelect') questionSelect!: ElementRef;
  @ViewChild('answer') answerInput!: ElementRef;
  alertText: string = '';
  alertType: 'success' | 'error' | 'warning' = 'success'

  constructor(
    private signupService: SignupService,
    private router: Router
  ) {}

  async signup(){
    const username = this.usernameInput.nativeElement.value;
    const email = this.emailInput.nativeElement.value;
    const password = this.passwordInput.nativeElement.value;
    const passwordRepeat = this.repeatpasswordInput.nativeElement.value;
    const selectedQuestionIndex = this.questionSelect.nativeElement.selectedIndex;
    const selectedQuestionText = this.questionSelect.nativeElement.options[this.questionSelect.nativeElement.selectedIndex].text;
    const answer = this.answerInput.nativeElement.value;

    if(password !== passwordRepeat){
      this.alertText = "Passwords don't match";
      this.alertType = 'error';      
      return;
    }
    if(selectedQuestionIndex === 0){
      this.alertText = 'Please select a security question.';
      this.alertType = 'error';
      return;
    }
    
    const signupData: Signup = {
      username,
      email,
      password,
      question: selectedQuestionText,
      answer
    };

    await this.signupService.login(signupData).subscribe(
      response => {
        const {username} = response;
        this.alertType = 'success';
        this.alertText = `User ${username} created successfully`;
      },
      error => {
        this.alertType = 'error'
        this.alertText = 'An error has occured';
      }
    );
  }
}
