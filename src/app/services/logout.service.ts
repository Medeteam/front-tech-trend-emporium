import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {
  private url = environment.apiURL + 'api/logout';
  constructor(private http: HttpClient) {}

  public logout(): Observable<any> {
    return this.http.post(this.url, {}, { withCredentials: true });
  }
}
