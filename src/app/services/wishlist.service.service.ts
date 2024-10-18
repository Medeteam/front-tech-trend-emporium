import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  constructor() { }
  private http = inject(HttpClient);
  private URLbase = environment.apiURL + `api`;

  public addToWishList(user:string, productId:string): Observable<any>{
    const url = `${this.URLbase}/${user}/wishlist/add/${productId}`;
    return this.http.post(url,{},{withCredentials:true});
  }

  public getWishlist(user:string){
    const url = `${this.URLbase}/${user}/wishlist`;
    return this.http.get<any>(url,{withCredentials:true});  
  }
}
