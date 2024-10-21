import { Component, OnInit } from '@angular/core';
import { ListproductsService } from '../../services/listproducts.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-featured-products',
  standalone: true,
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.css'],
  imports: [CommonModule, RouterModule]
})
export class FeaturedProductsComponent implements OnInit {
  products: any[] = [];  // Aquí se almacenarán los productos con más reviews

  constructor(private listproductsService: ListproductsService) {}

  ngOnInit(): void {
    this.getTopReviewedProducts();
  }

  getTopReviewedProducts(): void {
    this.listproductsService.getProducts().subscribe({
      next: (response: any[]) => {
        // Ordenar los productos por la cantidad de reviews y tomar los primeros 3
        this.products = response.sort((a, b) => b.rating.count - a.rating.count).slice(0, 3);
      },
      error: (error) => {
        console.error('Error fetching products:', error);
      }
    });
  }
}
