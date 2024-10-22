import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../interfaces/product';
import { TruncatePipe } from '../../pipes/truncate.pipe';
import { ModalProductComponent } from '../modal-product/modal-product.component';
import { ModalConfirmComponent } from '../modal-confirm/modal-confirm.component';

@Component({
  selector: 'app-products-table',
  standalone: true,
  imports: [CommonModule, TruncatePipe, ModalProductComponent, ModalConfirmComponent],
  templateUrl: './products-table.component.html',
  styleUrl: './products-table.component.css'
})
export class ProductsTableComponent {
  productsList: Product[] = [];
  isModalVisible: boolean = false;
  isConfirmVisible: boolean = false;
  productToUpdate: Product | undefined;
  idProductToDelete: string = "";

  constructor(private productsService: ProductsService) {
  }

  ngOnInit(){
    this.getProducts();
  }

  getProducts(): void{
    this.productsService.getProducts().subscribe({
      next: (data: Product[]) =>{
        this.productsList = data;    
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

  openModal(data: Product){   
    this.isModalVisible = true;
    this.productToUpdate = data; 
  }

  openConfirmModal(id: string){   
    this.isConfirmVisible = true;
    this.idProductToDelete = id;
  }
}
