import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { WishlistComponent } from '../wishlist/wishlist.component';
import { WishlistButtonComponent } from '../shared/wishlist-button/wishlist-button.component';

interface Product {
  id: string;
  title: string;
  price: number;
  category: string;
  image: string;
}

@Component({
  selector: 'app-shop-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, WishlistComponent,WishlistButtonComponent],
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})

export class ShopListComponent {
  products: Product[] = [];  
  filteredProducts: Product[] = [];
  categories: string[] = [];
  searchTerm: string = ''; 
  selectedCategory: string = ''; 
  displayCount: number = 6;
  wishlistProductIds: string[] = [];

  constructor(
    private productsService: ProductsService,
    private router: Router, 
    private route: ActivatedRoute ,
  ) {}

  ngOnInit(): void {
    const userId = localStorage.getItem('id');

    this.route.queryParams.subscribe(params => {
      const category = params['category'] || '';  
      const search = params['search'] || '';  

      this.selectedCategory = category;
      this.searchTerm = search;

      this.fetchProducts(category, search);
    });

    this.productsService.getProducts().subscribe({
      next: (data: Product[]) => { 
        this.extractCategories(data);
      },
      error: (err) => {
        console.error('Error al obtener las categorías:', err);
      }
    });
  }

  fetchProducts(category: string, search: string): void {
    this.productsService.getProducts(category).subscribe({
      next: (data: Product[]) => { 
        this.products = data;

        if (search) {
          this.filteredProducts = data.filter((product: Product) => 
            product.title.toLowerCase().includes(search.toLowerCase())
          );
        } else {
          this.filteredProducts = data.slice(0, this.displayCount);
        }
      },
      error: (err) => {
        console.error('Error al obtener los productos:', err);
      }
    });
  }

  extractCategories(products: Product[]) {
    const categoriesSet = new Set(products.map(product => product.category));
    this.categories = Array.from(categoriesSet);
  }

  filterByCategory(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.selectedCategory = selectedValue;

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { category: this.selectedCategory || null },
      queryParamsHandling: 'merge'
    });
  }

  searchProducts() {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { search: this.searchTerm || null },
      queryParamsHandling: 'merge'
    });
  }

  sortProducts(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;

    switch (selectedValue) {
      case 'nameAsc':
        this.filteredProducts.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'nameDesc':
        this.filteredProducts.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case 'priceAsc':
        this.filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case 'priceDesc':
        this.filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case 'setDefault':
        this.filteredProducts = [...this.products]; 
        this.applyFilters(); 
        break;
    }
  }

  loadMoreProducts() {
    this.displayCount += 6;
    this.filteredProducts = this.products.slice(0, this.displayCount);
  }

  loadLessProducts() {
    this.displayCount = Math.max(this.displayCount - 6, 6);
    this.filteredProducts = this.products.slice(0, this.displayCount);
  }

  applyFilters() {
    let filtered = this.products;

    if (this.selectedCategory) {
      filtered = filtered.filter(product => product.category === this.selectedCategory);
    }

    if (this.searchTerm) {
      filtered = filtered.filter(product => 
        product.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }

    this.filteredProducts = filtered.slice(0, this.displayCount);
  }
}
