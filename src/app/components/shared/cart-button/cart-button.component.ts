import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart-button',
  templateUrl: './cart-button.component.html',
  imports: [CommonModule],
  standalone: true,
})
export class CartButtonComponent implements OnInit {
  @Input() productId!: string;
  @Input() quantity: number = 1; 
  isInCart = false;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.checkIfProductIsInCart();
  }

  checkIfProductIsInCart() {
    this.cartService.getCartItems().subscribe((response) => {
      if (response.products) {
        this.isInCart = response.products.some((product) => product.id === this.productId);
      }
    });
  }

  toggleCart() {
    const userId = localStorage.getItem('id');
    if (!userId) {
      this.router.navigate(['/login']);
      return;
    }

    if (this.isInCart) {
      this.cartService.removeFromCart(this.productId).subscribe(() => {
        this.isInCart = false;
      });
      window.location.reload();
    } else {
      const product = { productId: this.productId, quantity: this.quantity };
      this.cartService.addToCart(product).subscribe(() => {
        this.isInCart = true;
      });
      window.location.reload();
    }
  }
}
