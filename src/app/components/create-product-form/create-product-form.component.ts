import { Component, ElementRef, ViewChild } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import { Category } from '../../interfaces/category';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../shared/button/button.component';
import { Product } from '../../interfaces/product';
import { ProductsService } from '../../services/products.service';
import { SimpleAlertComponent } from '../shared/simple-alert/simple-alert.component';

@Component({
  selector: 'app-create-product-form',
  standalone: true,
  imports: [CommonModule, ButtonComponent, SimpleAlertComponent],
  templateUrl: './create-product-form.component.html',
  styleUrl: './create-product-form.component.css'
})
export class CreateProductFormComponent {
  categories: string[] = [];
  alertText: string = '';
  alertType: 'success' | 'error' = 'error';
  @ViewChild('title') titleInput!: ElementRef;
  @ViewChild('description') descriptionInput!: ElementRef;
  @ViewChild('category') categorySelect!: ElementRef;
  @ViewChild('price') pricedInput!: ElementRef;
  @ViewChild('stock') stockInput!: ElementRef;
  @ViewChild('image') imageInput!: ElementRef;

  constructor(private categoriesService: CategoriesService, private productService: ProductsService){}

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

  createProduct(){
    const title = this.titleInput.nativeElement.value;
    const description = this.descriptionInput.nativeElement.value;
    const category = this.categorySelect.nativeElement.options[this.categorySelect.nativeElement.selectedIndex].text;
    const price = this.pricedInput.nativeElement.value;
    const stock = this.stockInput.nativeElement.value;
    const image = this.imageInput.nativeElement.value;

    const product: Product = {
      title: title,
      description: description,
      category: category,
      price: price,
      stock: stock,
      image: image
    };

    this.productService.createProduct(product).subscribe({
      next: (data) =>{
        console.log(data);          
        this.alertText = "Product created successfully";
        this.alertType = 'success';
      },
      error: (err) => {
        console.log(err);   
        this.alertText = "Product couldn't be created";
        this.alertType = 'error';    
      }
    });
  }
}
