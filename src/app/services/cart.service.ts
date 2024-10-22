import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { CartResponse } from '../interfaces/cart-response';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private apiUrl = environment.apiURL + 'api/cart';

  constructor(private http: HttpClient) { }

  addToCart(product: { productId: string; quantity: number }): Observable<any> {
    return this.http.post(`${this.apiUrl}`, product, { withCredentials: true });
  }

  getCartItems(): Observable<CartResponse> {
    return this.http.get<CartResponse>(this.apiUrl + '?details=true', { withCredentials: true });
  }

  removeFromCart(productId: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${productId}`, {
      withCredentials: true
    });
  }

  applyCoupon(couponCode: string): Observable<any> {
    const body = { code: couponCode }; 
    return this.http.post(`${this.apiUrl}/coupon`, body, { withCredentials: true });
  }

  removeCoupon(): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/coupon`, { withCredentials: true });
  }
}
