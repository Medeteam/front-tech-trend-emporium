import { Component } from '@angular/core';
import { ListproductsService } from '../../services/listproducts.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-shop-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})
export class ShopListComponent {
  products: any[] = [];
  filteredProducts: any[] = [];
  categories: string[] = [];
  searchTerm: string = ''; 
  selectedCategory: string = ''; 
  displayCount: number = 6;

  constructor(
    private listproductsService: ListproductsService, 
    private router: Router, 
    private route: ActivatedRoute 
  ) {}

  ngOnInit(): void {
    this.listproductsService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
        this.filteredProducts = data; 
        this.extractCategories(data);

        this.route.queryParams.subscribe(params => {
          const category = params['category'];
          const search = params['search'];

          if (category) {
            this.selectedCategory = category;
          }

          if (search) {
            this.searchTerm = search;
          }

          this.applyFilters(); 
        });
      },
      error: (err) => {
        console.error('Error al obtener los productos:', err);
      }
    });
  }

  extractCategories(products: any[]) {
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

    this.applyFilters();
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

    this.filteredProducts = filtered;
  }

  searchProducts() {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { search: this.searchTerm || null },
      queryParamsHandling: 'merge' 
    });

    this.applyFilters(); 
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
  }

  loadLessProducts() {
    this.displayCount = Math.max(this.displayCount - 6, 6); 
  }
}
