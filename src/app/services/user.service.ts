import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  private http = inject(HttpClient);
  private URLbase = environment.apiURL + `api`;

  public getUsers(){
    const url = `${this.URLbase}/user`;
    return this.http.get<any>(url,{withCredentials:true});
  }
}
