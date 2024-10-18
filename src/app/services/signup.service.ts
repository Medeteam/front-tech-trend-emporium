import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Signup } from '../interfaces/signup';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private url = environment.apiURL + 'api/auth';
  constructor(private http: HttpClient) {}

  public login(data: Signup): Observable<any> {
    return this.http.post(this.url, data, { withCredentials: true });
  }
}
