import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
<<<<<<< HEAD
import { CategoryRequest } from '../interfaces/category-request';
import { Category } from '../interfaces/category';
=======
>>>>>>> 3e1b61d8b467b5c4762f45d975f8615860b716fb

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

  public updateCategory(data: Category){
    return this.http.put<any>(this.URLbase, data, {withCredentials: true});
  }

  public deleteCategory(categoryId: string){
    return this.http.delete<any>(this.URLbase, {body: {id: categoryId}, withCredentials: true})
  }
}
