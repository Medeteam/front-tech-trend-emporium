import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { CategoryRequest } from '../interfaces/category-request';

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

  public createCategory(data: CategoryRequest){
    return this.http.post<any>(this.URLbase, data, {withCredentials: true});
  }
}
