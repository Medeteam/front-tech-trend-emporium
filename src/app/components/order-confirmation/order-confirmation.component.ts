import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { ListproductsService } from '../../services/listproducts.service';
import { CommonModule } from '@angular/common';
import { CartResponse } from '../../interfaces/cart-response';

@Component({
  selector: 'app-order-confirmation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css'],
})
export class OrderConfirmationComponent implements OnInit {
  cart: CartResponse | null = null; 
  cartItems: any[] = [];
  total: number = 0;

  constructor(private cartService: CartService, private productService: ListproductsService, private router: Router) { }

  ngOnInit(): void {
    this.getCartItems();
  }


  getCartItems() {
    this.cartService.getCartItems().subscribe((cartResponse: CartResponse) => {
      this.cart = cartResponse; 
      this.cartItems = cartResponse.products || [];
      this.total = cartResponse.finalTotal;
    });
  }
  confirmOrder() {
    this.cartItems.forEach(item => {
      this.productService.getProductById(item.id).subscribe((product) => {
        if (product && product.stock >= item.quantity) {
          product.stock -= item.quantity;
          this.productService.updateProductStock(product.id, product).subscribe(() => {
            console.log(`Stock actualizado para el producto ${product.id}`);
          });
        } else {
          console.error('Stock insuficiente para el producto: ', product.title);
        }
      });

      this.cartService.removeFromCart(item.id).subscribe(() => {
        console.log(`Producto ${item.id} eliminado del carrito`);
      });
    });
    window.location.reload();
    this.router.navigate(['/order-confirmed']);
  }
}
