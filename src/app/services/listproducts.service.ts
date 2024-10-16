import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})

export class ListproductsService {

  constructor() { }
  private http = inject(HttpClient);
  private URLbase = environment.apiURL + 'api/store/products';

  public getProducts(category?: string) {
    let params = new HttpParams();

    if (category) {
      params = params.set('category', category);
    }

    return this.http.get<any>(this.URLbase, { params });
  }

  public getProductById(productId: string) {
    return this.http.get<any>(`${this.URLbase}/${productId}`);
  }
}
