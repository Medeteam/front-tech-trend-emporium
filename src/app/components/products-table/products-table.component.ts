import { ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListproductsService } from '../../services/listproducts.service';
import { Product } from '../../interfaces/product';
import { TruncatePipe } from '../../pipes/truncate.pipe';
import { ModalProductComponent } from '../modal-product/modal-product.component';

@Component({
  selector: 'app-products-table',
  standalone: true,
  imports: [CommonModule, TruncatePipe, ModalProductComponent],
  templateUrl: './products-table.component.html',
  styleUrl: './products-table.component.css'
})
export class ProductsTableComponent {
  productsList: Product[] = [];
  isModalVisible: boolean = false;

  constructor(private productsService: ListproductsService) {
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
    if(!visibility){
      // this.getProducts();
    }
  }

  openModal(){   
    this.isModalVisible = true;
  }

  // closeModal(){
  //   this.isModalVisible = false;
  // }
}
