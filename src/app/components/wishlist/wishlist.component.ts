import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../../services/wishlist.service.service';
import { ListproductsService } from '../../services/listproducts.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css'],
  imports: [CommonModule, RouterModule] // Importa CommonModule y RouterModule para usar directivas y navegación.
})
export class WishlistComponent implements OnInit {
  wishlistProductIds: string[] = [];
  wishlistProducts: any[] = [];
  userId: string;

  constructor(private wishlistService: WishlistService, private listproductService: ListproductsService) {
    this.userId = localStorage.getItem('id') || ''; // Obtén el user_id del localStorage.
  }

  ngOnInit(): void {
    this.loadWishlist();
  }

  loadWishlist(): void {
    if (this.userId) {
      this.wishlistService.getWishlist(this.userId).subscribe({
        next: (wishlist: any) => {
          // Asegúrate de que productList es el array correcto que quieres usar
          this.wishlistProductIds = wishlist.productList || []; // Reemplaza 'productlist' con 'productList' si es el caso
          console.log("wishlistProductIds: ", this.wishlistProductIds); // Para verificar si se asigna correctamente
          this.loadWishlistProducts();
        },
        error: (err: any) => {
          console.error('Error fetching wishlist: ', err);
        }
      });
    }
  }
  
  loadWishlistProducts(): void {
    console.log('wishlistProductIds:', this.wishlistProductIds); // Asegúrate de que el array contiene los IDs correctos
    
    if (Array.isArray(this.wishlistProductIds)) {
      this.wishlistProductIds.forEach((productId) => {
        console.log('Fetching product for ID:', productId); // Asegúrate de que se están buscando los IDs correctos
  
        this.listproductService.getProductById(productId).subscribe({
          next: (product: any) => {
            console.log('Product fetched:', product);  // Asegúrate de que los productos se están recibiendo correctamente
            if (product) {
              this.wishlistProducts.push(product); // Agregar el producto a la lista si se recibió correctamente
              console.log('Current wishlistProducts:', this.wishlistProducts); // Verificar el estado actual de los productos en la lista
            }
          },
          error: (err: any) => {
            console.error('Error fetching product with ID', productId, ':', err); // Ver si hay un error con la solicitud de productos
          }
        });
      });
    } else {
      console.error('wishlistProductIds is not an array:', this.wishlistProductIds);
    }
  }
   
}
