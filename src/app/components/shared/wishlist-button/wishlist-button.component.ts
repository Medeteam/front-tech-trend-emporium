import { Component, Input } from '@angular/core';
import { WishlistService } from '../../../services/wishlist.service.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-wishlist-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wishlist-button.component.html',
  styleUrls: ['./wishlist-button.component.css']
})
export class WishlistButtonComponent {
  @Input() productId!: string; // Input para recibir el ID del producto
  userId: string | null = localStorage.getItem('id');
  isInWishlist: boolean = false;

  constructor(private wishlistService: WishlistService, private router: Router) {}

  ngOnInit(): void {
    this.checkWishlistStatus();
  }

  checkWishlistStatus(): void {
    if (this.userId) {
      this.wishlistService.getWishlist(this.userId).subscribe({
        next: (wishlist: any) => {
          this.isInWishlist = wishlist.productList.includes(this.productId);
        },
        error: (err) => {
          console.error('Error checking wishlist:', err);
        }
      });
    }
  }

  toggleWishlist(): void {
    if (!this.userId) {
      this.router.navigate(['/login']);
    } else {
      if (this.isInWishlist) {
        this.removeFromWishlist();
      } else {
        this.addToWishlist();
      }
    }
  }

  addToWishlist(): void {
    if (this.userId) {
      this.wishlistService.addToWishList(this.userId, this.productId).subscribe({
        next: () => {
          this.isInWishlist = true;
        },
        error: (err) => {
          console.error('Error adding to wishlist:', err);
        }
      });
    }
  }

  removeFromWishlist(): void {
    if (this.userId) {
      this.wishlistService.removeFromWishlist(this.userId, this.productId).subscribe({
        next: () => {
          this.isInWishlist = false;
        },
        error: (err) => {
          console.error('Error removing from wishlist:', err);
        }
      });
    }
  }
}
