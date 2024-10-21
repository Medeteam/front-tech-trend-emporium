import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Inject,Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})

export class CategoriesService {

  constructor() { }
  private http = inject(HttpClient);
  private URLbase = environment.apiURL + 'api/category'

  public getCategories(){
    return this.http.get<any>(this.URLbase)
  }
}
