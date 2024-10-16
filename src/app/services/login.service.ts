import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Login } from '../interfaces/login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url = environment.apiURL + 'api/login';
  constructor(private http: HttpClient) {}

  public login(data: Login): Observable<any> {
    return this.http.post(this.url, data, { withCredentials: true });
  }
}
