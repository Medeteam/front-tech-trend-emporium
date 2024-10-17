import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { BenefitsComponent } from '../benefits/benefits.component';
import { FeaturedProductsComponent } from '../featured-products/featured-products.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,HeroComponent, FeaturedProductsComponent ,BenefitsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
