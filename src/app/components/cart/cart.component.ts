import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  totalBeforeDiscount: number = 0;
  totalAfterDiscount: number = 0;
  shippingCost: number = 0;
  finalTotal: number = 0;
  couponCode: string = "";
  isCouponApplied: boolean = false;


  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    const userId = localStorage.getItem('id');
    if (!userId) {
      this.router.navigate(['/login']);
      return;
    }
    this.loadCartItems();
  }

  loadCartItems() {
    this.cartService.getCartItems().subscribe((response: any) => {
      if (response && response.products) {
        this.cartItems = response.products;
        this.totalBeforeDiscount = response.totalBeforeDiscount || 0;
        this.totalAfterDiscount = response.totalAfterDiscount || 0;
        this.shippingCost = response.shippingCost || 0;
        this.finalTotal = response.finalTotal || 0;

        this.couponCode = response.coupon?.couponCode === 'None' ? '' : response.coupon?.couponCode || '';

        this.isCouponApplied = this.couponCode ? true : false;
      } else {
        this.cartItems = [];
      }
    });
  }

  applyCoupon() {
    if (this.couponCode) {
      this.cartService.applyCoupon(this.couponCode).subscribe((response) => {
        this.loadCartItems();
      });
    }
  }

  removeCoupon() {
    this.cartService.removeCoupon().subscribe(() => {
      this.couponCode = '';
      this.loadCartItems();
    });
  }

  removeFromCart(productId: string) {
    this.cartService.removeFromCart(productId).subscribe(() => {
      this.loadCartItems();
    });
  }
}
