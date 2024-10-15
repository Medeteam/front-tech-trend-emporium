import { HttpClient } from '@angular/common/http';
import { inject, Injectable, input } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})

export class ListproductsService {

  constructor() { }
  private http = inject(HttpClient);
  private URLbase = environment.apiURL + 'api/store/products';

  public getProducts(){
    return this.http.get<any>(this.URLbase);
  };

  public getProductById(productId: string) {
    return this.http.get<any>(`${this.URLbase}/${productId}`);
  }
  
}
