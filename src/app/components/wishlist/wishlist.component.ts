import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../../services/wishlist.service.service';
import { ProductsService } from '../../services/products.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css'],
  imports: [CommonModule, RouterModule] // Importa CommonModule y RouterModule para usar directivas y navegación.
})
export class WishlistComponent implements OnInit {
  wishlistProductIds: string[] = [];
  wishlistProducts: any[] = [];
  userId: string;

  constructor(private wishlistService: WishlistService, private productService: ProductsService) {
    this.userId = localStorage.getItem('id') || ''; 
  }

  ngOnInit(): void {
    this.loadWishlist();
  }

  loadWishlist(): void {
    if (this.userId) {
      this.wishlistService.getWishlist(this.userId).subscribe({
        next: (wishlist: any) => {

          this.wishlistProductIds = wishlist.productList || [];
          console.log("wishlistProductIds: ", this.wishlistProductIds); 
          this.loadWishlistProducts();
        },
        error: (err: any) => {
          console.error('Error fetching wishlist: ', err);
        }
      });
    }
  }
  
  loadWishlistProducts(): void {
    console.log('wishlistProductIds:', this.wishlistProductIds); 
    
    if (Array.isArray(this.wishlistProductIds)) {
      this.wishlistProductIds.forEach((productId) => {
        console.log('Fetching product for ID:', productId); 
  
        this.productService.getProductById(productId).subscribe({
          next: (product: any) => {
            console.log('Product fetched:', product); 
            if (product) {
              this.wishlistProducts.push(product); 
              console.log('Current wishlistProducts:', this.wishlistProducts); // Verificar el estado actual de los productos en la lista
            }
          },
          error: (err: any) => {
            console.error('Error fetching product with ID', productId, ':', err); // Ver si hay un error con la solicitud de productos
          }
        });
      });
    } else {
      console.error('wishlistProductIds is not an array:', this.wishlistProductIds);
    }
  }
   
  removeFromWishlist(productId: string): void {
    if (this.userId) {
      this.wishlistService.removeFromWishlist(this.userId, productId).subscribe({
        next: () => {
          this.wishlistProducts = this.wishlistProducts.filter(product => product.id !== productId);
        },
        error: (err: any) => {
          console.error('Error removing product from wishlist: ', err);
        }
      });
    }
  }
}
