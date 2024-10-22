import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Signup } from '../interfaces/signup';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateEmployeeService {
  private URL = environment.apiURL + 'api/employee/auth';
  constructor(private http: HttpClient) {}

  public employeeSingUp(data:Signup): Observable<any>{
    return this.http.post(this.URL, data, { withCredentials: true });
  }
}
