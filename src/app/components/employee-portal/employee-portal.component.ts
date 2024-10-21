import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeePortalButton } from '../../interfaces/employee-portal-button';
import { OutlinedButtonComponent } from '../shared/outlined-button/outlined-button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-portal',
  standalone: true,
  imports: [CommonModule, OutlinedButtonComponent],
  templateUrl: './employee-portal.component.html',
  styleUrl: './employee-portal.component.css'
})
export class EmployeePortalComponent {
  buttonList: EmployeePortalButton[] = [
    {text: 'List products', route: 'employee-portal/products'},
    {text: 'List categories', route: 'employee-portal/categories'},
    {text: 'View users', route: 'employee-portal/users'},
    {text: 'Create product', route: 'employee-portal/products/create'},
    {text: 'Create category', route: 'employee-portal/categories/create'},
    {text: 'Create employee', route: 'employee-portal/employees/create'}
  ];

  constructor(private router: Router) {  }

  navigateTo(route: string){
    console.log(route);
    
    this.router.navigate([route]);
  }
}
