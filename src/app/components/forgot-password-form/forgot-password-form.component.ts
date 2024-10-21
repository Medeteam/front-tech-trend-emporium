import { Component, ElementRef, viewChild, ViewChild } from '@angular/core';
import { ButtonComponent } from '../shared/button/button.component';
import { ForgotPwdService } from '../../services/forgotpwd.service'
import { Router } from '@angular/router';
import { Recover } from '../../interfaces/recover';


@Component({
  selector: 'app-forgot-password-form',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './forgot-password-form.component.html',
  styleUrl: './forgot-password-form.component.css'
})
export class ForgotPasswordFormComponent {
    @ViewChild('email') emailInput!: ElementRef;
    @ViewChild('qAnswer') questionAnswerInput!: ElementRef;
    @ViewChild('newPassword') newPasswordInput!: ElementRef;
    alertText: string = '';
    alertType: 'success' | 'error' = 'error';
  
    constructor(
      private forgotPwdService: ForgotPwdService ,
      private router: Router
    ) {}

  async recover(){
    const emailText = this.emailInput.nativeElement.value;
    const answerText = this.questionAnswerInput.nativeElement.value;
    const newPasswordText = this.newPasswordInput.nativeElement.value;

    const recoverData: Recover = {
      email: emailText,
      qAnswer:answerText,
      newPassword:newPasswordText
    }
    await this.forgotPwdService.Recover(recoverData).subscribe(
      response => {
        console.log('Recovery successful', response);
        this.router.navigate(['/login']);
      },
      error => {
        console.error("Recovery failed", error);
      }
    )
  };
}
