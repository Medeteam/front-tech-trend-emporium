import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Category } from '../../interfaces/category';
import { CategoriesService } from '../../services/categories.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-category.component.html',
  styleUrl: './modal-category.component.css'
})
export class ModalCategoryComponent {
  @Input() isVisible: boolean = false;
  @Output() stateChange = new EventEmitter<boolean>();
  @Input() category: Category | undefined;
  @ViewChild('name') mameInput!: ElementRef;
  @ViewChild('description') descriptionInput!: ElementRef;

  constructor(private categoriesService: CategoriesService){}

  updateProduct(){
    const name = this.mameInput.nativeElement.value;
    const description = this.descriptionInput.nativeElement.value;

    if(this.category){
      this.category.name = name;
      this.category.description = description;
      
      this.categoriesService.updateCategory(this.category).subscribe({
        next: () =>{},
        error: (err) => {
          console.log(err);          
        }
      });
      this.closeModal();
    }
  }

  closeModal() {
    this.isVisible = false;
    this.stateChange.emit(this.isVisible);  
  }
}
