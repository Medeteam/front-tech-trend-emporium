import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { AuthService } from '../../services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LogoutService } from '../../services/logout.service';
import { CartService } from '../../services/cart.service'; 

@Component({
  selector: 'app-eheader',
  standalone: true,  
  imports: [CommonModule, FormsModule, RouterModule], 
  templateUrl: './eheader.component.html',
  styleUrls: ['./eheader.component.css']
})
export class HeaderComponent_1 implements OnInit {
  username: string | null = null;
  isLoggedIn: boolean = false;
  isAdmin: boolean = false;
  menuOpen: boolean = false;
  searchTerm: string = ''; 
  searchOpen = false;
  userId: string|null = null;
  cartItemCount: number = 0; 

  constructor(private authService: AuthService, private router: Router, private logoutService: LogoutService,private cartService: CartService ) {}

  ngOnInit(): void {
    this.username = this.authService.getUser();
    this.isLoggedIn = this.authService.isLoggedIn();
    if(this.authService.getRole() === 'Admin' || this.authService.getRole() === 'Employee'){
      this.isAdmin = true;
    } else {
      this.isAdmin = false;
    }

    this.loadCartItemsCount();
  }

  loadCartItemsCount() {
    this.cartService.getCartItems().subscribe((cart) => {
      this.cartItemCount = cart.products ? cart.products.reduce((sum, item) => sum + item.quantity, 0) : 0;
    });
  }
  
  getUserId() {
    return localStorage.getItem('id');
  }

  onLogout() {
    this.authService.logout();
    this.logoutService.logout().subscribe(
      response => {
        console.log('Logout successful', response);
        this.username = null;
        this.isLoggedIn = false;
        window.location.reload();
      },
      error => {
        console.error('Logout failed', error);
      }
    );
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  onSearch() {
    if (this.searchTerm.trim()) {
      this.router.navigate(['/products'], { queryParams: { search: this.searchTerm } });
    }
  }

  toggleSearch() {
    this.searchOpen = !this.searchOpen;
  }
}
