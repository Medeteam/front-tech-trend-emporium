import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-confirm-delete-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-confirm-delete-category.component.html',
  styleUrl: './modal-confirm-delete-category.component.css'
})
export class ModalConfirmDeleteCategoryComponent {
  @Input() isVisible: boolean = false;
  @Output() stateChange = new EventEmitter<boolean>();
  @Input() idCategory: string = "";

  constructor(private categoriesService: CategoriesService){}

  deleteCategory(){
    this.categoriesService.deleteCategory(this.idCategory).subscribe({
      next: (data: any) => {
        console.log("Success: " + data);        
      },
      error: (err) => {
        console.log("Error: " + err);        
      }
    });
    this.closeModal();
  }

  closeModal() {
    this.isVisible = false;
    this.stateChange.emit(this.isVisible);
  }
}
