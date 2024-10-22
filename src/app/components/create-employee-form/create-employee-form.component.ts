import { Component, ElementRef, ViewChild } from '@angular/core';
import { CreateEmployeeService } from '../../services/create-employee.service';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../shared/button/button.component';
import { Router } from '@angular/router';
import { Signup } from '../../interfaces/signup';

@Component({
  selector: 'app-create-employee-form',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './create-employee-form.component.html',
  styleUrl: './create-employee-form.component.css'
})
export class CreateEmployeeFormComponent {
  @ViewChild('username') usernameInput!: ElementRef;
  @ViewChild('email') emailInput!: ElementRef;
  @ViewChild('password') passwordInput!: ElementRef;
  @ViewChild('repeatPassword') repeatpasswordInput!: ElementRef;
  @ViewChild('questionSelect') questionSelect!: ElementRef;
  @ViewChild('answer') answerInput!: ElementRef;
  constructor(private createEmployeeService: CreateEmployeeService, private router: Router){}
    async employeeCreation(){
    const username = this.usernameInput.nativeElement.value;
    const email = this.emailInput.nativeElement.value;
    const password = this.passwordInput.nativeElement.value;
    const passwordRepeat = this.repeatpasswordInput.nativeElement.value;
    const selectedQuestionIndex = this.questionSelect.nativeElement.selectedIndex;
    const selectedQuestionText = this.questionSelect.nativeElement.options[this.questionSelect.nativeElement.selectedIndex].text;
    const answer = this.answerInput.nativeElement.value;
    
    if(password !== passwordRepeat){
      console.log("Passwords does not match")      
      return;
    }
    if(selectedQuestionIndex === 0){
      console.log("Unselected question")
      return;
    }
    const signupData: Signup = {
      username,
      email,
      password,
      question: selectedQuestionText,
      answer
    };
    await this.createEmployeeService.employeeSingUp(signupData).subscribe(
      response => {
        const {username} = response;
        console.log("Employee created succesfully")
        this.router.navigate(['/employee-portal'])
      },
      error => {
        console.log(error)
      }
    );

    }
  }

