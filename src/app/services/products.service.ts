import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  constructor() { }
  private http = inject(HttpClient);
  private URLBaseShopper = environment.apiURL + 'api/store/products';
  private URLBaseEmployees = environment.apiURL + 'api/product';

  public getProducts(category?: string) {
    let params = new HttpParams();

    if (category) {
      params = params.set('category', category);
    }

    return this.http.get<any>(this.URLBaseShopper, { params });
  }

  public getProductById(productId: string) {
    return this.http.get<any>(`${this.URLBaseShopper}/${productId}`);
  }

  public updateProduct(data: Product){
    return this.http.put<any>(this.URLBaseEmployees, data, {withCredentials: true});
  }

  public deleteProduct(productId: string){
    return this.http.delete<any>(this.URLBaseEmployees, {body: {id: productId}, withCredentials: true})
  }
}
