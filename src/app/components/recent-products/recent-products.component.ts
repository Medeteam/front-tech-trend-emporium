import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductsService } from '../../services/products.service';  
@Component({
  selector: 'app-recent-products',
  standalone: true,
  templateUrl: './recent-products.component.html',
  styleUrls: ['./recent-products.component.css'],
  imports: [CommonModule, RouterModule]
})
export class RecentProductsComponent implements OnInit {
  products: any[] = [];


  private productsService = inject(ProductsService);

  ngOnInit(): void {
    this.fetchProducts();
  }


  fetchProducts(): void {
    this.productsService.getProducts().subscribe((response: any) => {

      this.products = response.sort((a: any, b: any) => {
        return new Date(b.created).getTime() - new Date(a.created).getTime();
      }).slice(0, 3);
    });
  }
}
