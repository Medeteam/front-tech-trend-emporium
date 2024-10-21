import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListproductsService } from '../../services/listproducts.service';
import { Product } from '../../interfaces/product';
import { TruncatePipe } from '../../pipes/truncate.pipe';

@Component({
  selector: 'app-products-table',
  standalone: true,
  imports: [CommonModule, TruncatePipe],
  templateUrl: './products-table.component.html',
  styleUrl: './products-table.component.css'
})
export class ProductsTableComponent {
  productsList: Product[] = [];

  constructor(private productsService: ListproductsService) {
  }

  ngOnInit(){
    this.getProducts();
  }

  getProducts(): void{
    this.productsService.getProducts().subscribe({
      next: (data: Product[]) =>{
        this.productsList = data;
        console.log(this.productsList);        
      },
      error: (err) => {
        console.log("An error occurred: " + err);        
      }
    });
  }
}
