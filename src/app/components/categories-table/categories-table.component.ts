import { Component } from '@angular/core';
import { Category } from '../../interfaces/category';
import { CategoriesService } from '../../services/categories.service';
import { CommonModule } from '@angular/common';
import { TruncatePipe } from '../../pipes/truncate.pipe';
import { ModalCategoryComponent } from "../modal-category/modal-category.component";
import { ModalConfirmDeleteCategoryComponent } from "../modal-confirm-delete-category/modal-confirm-delete-category.component";

@Component({
  selector: 'app-categories-table',
  standalone: true,
  imports: [CommonModule, TruncatePipe, ModalCategoryComponent, ModalConfirmDeleteCategoryComponent],
  templateUrl: './categories-table.component.html',
  styleUrl: './categories-table.component.css'
})
export class CategoriesTableComponent {
  categoriesList: Category[] = [];
  isModalVisible: boolean = false;
  isConfirmVisible: boolean = false;
  categoryToUpdate: Category | undefined;
  idCategoryToDelete: string = "";

  constructor(private categoriesService: CategoriesService) {
  }

  ngOnInit(){
    this.getCategories();
  }

  getCategories(): void{
    this.categoriesService.getCategories().subscribe({
      next: (data: Category[]) =>{
        this.categoriesList = data;    
      },
      error: (err) => {
        console.log("An error occurred: " + err);        
      }
    });
  }

  onStateChange(visibility: boolean) {    
    this.isModalVisible = visibility;
  }

  onConfirmStateChange(visibility: boolean){
    this.isConfirmVisible = visibility;
    if(!visibility){
      window.location.reload();
    }
  }

  openModal(data: Category){   
    this.isModalVisible = true;
    this.categoryToUpdate = data; 
  }

  openConfirmModal(id: string){   
    this.isConfirmVisible = true;
    this.idCategoryToDelete = id;
  }
}
