import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-final-order',
  standalone: true,
  imports : [CommonModule],
  templateUrl: './final-order.component.html',
  styleUrls: ['./final-order.component.css']
})
export class FinalOrderComponent implements OnInit {

  loading = true;
  messageVisible = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
      this.messageVisible = true;

      setTimeout(() => {
        this.router.navigate(['/']);
      }, 5000);
    }, 5000);
  }
}
