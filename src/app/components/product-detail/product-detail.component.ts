import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { WishlistButtonComponent } from '../shared/wishlist-button/wishlist-button.component';
import { CartButtonComponent } from '../shared/cart-button/cart-button.component';
import { ReviewService } from '../../services/reviews.service';
import { ReviewComponent } from '../reviews/reviews.component';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, WishlistButtonComponent, CartButtonComponent, ReviewComponent],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  product: any;
  reviews: any[] = [];
  selectedQuantity: number = 1;
  maxQuantity: number = 1;
  username: string | null = null;  
  isAdmin: boolean = false;     

  constructor(private route: ActivatedRoute,private productService: ProductsService,private reviewService: ReviewService,private authService: AuthService) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);

    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.productService.getProductById(productId).subscribe((product) => {
        this.product = product;
        this.maxQuantity = product.stock;
      });

      this.reviewService.getReviews(productId).subscribe((reviews) => {
        this.reviews = reviews;
      });
    }

    this.username = this.authService.getUser();   
    this.isAdmin = this.authService.getRole() === 'Admin';  
  }

  onQuantityChange(newQuantity: number) {
    if (newQuantity > this.maxQuantity) {
      this.selectedQuantity = this.maxQuantity;
    } else if (newQuantity < 1) {
      this.selectedQuantity = 1;
    } else {
      this.selectedQuantity = newQuantity;
    }
  }

  deleteReview(reviewId: string): void {
    const productId = this.route.snapshot.paramMap.get('id');
    
    if (!productId) {
      console.error('Product ID is null');
      return;
    }
  
    if (confirm('Are you sure you want to delete this review?')) {
      this.reviewService.removeReview(productId, reviewId).subscribe(() => {
        this.reviewService.getReviews(productId).subscribe((reviews) => {
          this.reviews = reviews;
        });
        window.location.reload();
      });
    }
  }
}
