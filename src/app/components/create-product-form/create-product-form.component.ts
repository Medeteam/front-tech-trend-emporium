import { Component } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import { Category } from '../../interfaces/category';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../shared/button/button.component';

@Component({
  selector: 'app-create-product-form',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './create-product-form.component.html',
  styleUrl: './create-product-form.component.css'
})
export class CreateProductFormComponent {
  categories: string[] = [];

  constructor(private categoriesService: CategoriesService){}

  ngOnInit(){
    this.getCategories();
  }

  getCategories(){
    this.categoriesService.getCategories().subscribe({
      next: (data: Category[]) => {
        data.map(c => {
          this.categories.push(c.name);
        });      
      },
      error: (err) => {
        console.log("Error fetching data " + err);        
      }
    });
  }
}
