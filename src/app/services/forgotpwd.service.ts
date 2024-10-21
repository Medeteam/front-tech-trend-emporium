import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Recover } from '../interfaces/recover';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForgotPwdService {
  private url = environment.apiURL + 'api/recover';
  constructor(private http: HttpClient) {}

  public Recover(data: Recover): Observable<any> {
    return this.http.post(this.url, data, { withCredentials: true });
  }
}
