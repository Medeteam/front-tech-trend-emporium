import { Component, OnInit } from '@angular/core';
import { ListproductsService } from '../../services/listproducts.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-featured-products',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './featured-products.component.html',
  styleUrl: './featured-products.component.css',
})

export class FeaturedProductsComponent implements OnInit {
  slider: HTMLElement | null = null;
  defaultTransform: number = 0;
  products: any[] = [];
  
  constructor(private listproductsService: ListproductsService) {}

  ngOnInit(): void {
    this.slider = document.getElementById("slider");
    this.defaultTransform = 0;
    
    // Obtener productos del servicio
    this.listproductsService.getProducts().subscribe({
      next: (data) => {
        this.products = data.slice(0, 9); // Limitar a 9 productos
      },
      error: (err) => {
        console.error('Error fetching products:', err);
      }
    });
  }

  goNext() {
    if (this.slider) {
      this.defaultTransform -= 398;
      if (Math.abs(this.defaultTransform) >= this.slider.scrollWidth / 1.7) {
        this.defaultTransform = 0;
      }
      this.slider.style.transform = "translateX(" + this.defaultTransform + "px)";
    }
  }

  goPrev() {
    if (this.slider) {
      if (Math.abs(this.defaultTransform) === 0) {
        this.defaultTransform = 0;
      } else {
        this.defaultTransform += 398;
      }
      this.slider.style.transform = "translateX(" + this.defaultTransform + "px)";
    }
  }
}
