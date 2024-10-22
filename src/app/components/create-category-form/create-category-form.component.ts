import { Component, ElementRef, ViewChild } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../shared/button/button.component';
import { SimpleAlertComponent } from '../shared/simple-alert/simple-alert.component';
import { CategoryRequest } from '../../interfaces/category-request';

@Component({
  selector: 'app-create-category-form',
  standalone: true,
  imports: [CommonModule, ButtonComponent, SimpleAlertComponent],
  templateUrl: './create-category-form.component.html',
  styleUrl: './create-category-form.component.css'
})
export class CreateCategoryFormComponent {
  alertText: string = '';
  alertType: 'success' | 'error' = 'error';
  @ViewChild('catName') nameInput!: ElementRef;
  @ViewChild('description') descriptionInput!: ElementRef;

  constructor(private categoriesService: CategoriesService){}

  createCategory(){
    const name = this.nameInput.nativeElement.value;
    const description = this.descriptionInput.nativeElement.value;

    const category: CategoryRequest = {
      name: name,
      description: description
    };

    this.categoriesService.createCategory(category).subscribe({
      next: (data) =>{
        console.log("Success: " + data);          
        this.alertText = "Category created successfully";
        this.alertType = 'success';
      },
      error: (err) => {
        console.log("Error: " + err);   
        this.alertText = "Category couldn't be created";
        this.alertType = 'error';    
      }
    });
  }

}
