import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  private baseUrl = `${environment.apiURL}api/store/products`;

  constructor(private http: HttpClient) {}

  addReview(productId: string, review: { user: string; comment: string; rate: number }): Observable<any> {
    return this.http.post(`${this.baseUrl}/${productId}/reviews/add`, review, {withCredentials: true,});
  }

  getReviews(productId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${productId}/reviews`, {withCredentials: true,});
  }

  removeReview(productId: string, reviewId: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${productId}/reviews/remove`, {body: { reviewId }, withCredentials: true,});
  }
}
