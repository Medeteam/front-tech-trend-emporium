import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule para tener acceso a directivas como *ngIf y *ngFor
import { AuthService } from '../../services/auth.service';
import { Router, RouterModule } from '@angular/router'; // Importar Router para manejar la búsqueda
import { FormsModule } from '@angular/forms';
 
@Component({
  selector: 'app-eheader',
  standalone: true,  // Definir como standalone
  imports: [CommonModule,FormsModule, RouterModule], // Importar CommonModule para usar las directivas de Angular
  templateUrl: './eheader.component.html',
  styleUrls: ['./eheader.component.css']
})
export class HeaderComponent_1 implements OnInit {
  username: string | null = null;
  isLoggedIn: boolean = false;
  menuOpen: boolean = false;
  searchTerm: string = ''; // Variable para el término de búsqueda
  searchOpen = false;
  userId: string|null = null;
 
  constructor(private authService: AuthService, private router: Router) {}
 
  ngOnInit(): void {
    this.username = this.authService.getUser();
    this.isLoggedIn = this.authService.isLoggedIn();
  }
  
  getUserId() {
    return localStorage.getItem('id');
  }
  
 
  onLogout() {
    this.authService.logout();
    this.username = null;
    this.isLoggedIn = false;
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