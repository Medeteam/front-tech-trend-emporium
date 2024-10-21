import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { BenefitsComponent } from '../benefits/benefits.component';
import { FeaturedProductsComponent } from '../featured-products/featured-products.component';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from '../categories/categories.component';
import { RecentProductsComponent } from '../recent-products/recent-products.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,HeroComponent, FeaturedProductsComponent ,BenefitsComponent, CategoriesComponent, RecentProductsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
