import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { WishlistButtonComponent } from '../shared/wishlist-button/wishlist-button.component';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, WishlistButtonComponent],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  product: any;
  
  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService
  ) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.productService.getProducts().subscribe((products) => {
        this.product = products.find((p: any) => p.id === productId);
      });
    }
  }
}
