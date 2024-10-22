import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../../services/reviews.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewComponent implements OnInit {
  username: string = '';
  comment: string = '';
  rate: number | null = null;
  productId: string = '';
  isLoggedIn: boolean = false;

  constructor(private reviewService: ReviewService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.username = localStorage.getItem('username') || '';

    this.isLoggedIn = !!this.username;

    this.productId = this.route.snapshot.paramMap.get('id') || '';
  }

  submitReview() {
    if (this.comment && this.rate) {
      const review = {
        user: this.username,
        comment: this.comment,
        rate: this.rate,
      };

      this.reviewService.addReview(this.productId, review).subscribe((response) => {
        console.log('Review submitted successfully:', response);
        window.location.reload(); 
      });
    }
  }
}
