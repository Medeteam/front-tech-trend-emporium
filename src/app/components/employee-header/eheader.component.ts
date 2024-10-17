import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule para tener acceso a directivas como *ngIf y *ngFor
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router'; // Importar Router para manejar la búsqueda
import { FormsModule } from '@angular/forms';
 
@Component({
  selector: 'app-eheader',
  standalone: true,  // Definir como standalone
  imports: [CommonModule,FormsModule], // Importar CommonModule para usar las directivas de Angular
  templateUrl: './eheader.component.html',
  styleUrls: ['./eheader.component.css']
})
export class HeaderComponent_1 implements OnInit {
  username: string | null = null;
  isLoggedIn: boolean = false;
  menuOpen: boolean = false;
  searchTerm: string = ''; // Variable para el término de búsqueda
  searchOpen = false;
 
  constructor(private authService: AuthService, private router: Router) {}
 
  ngOnInit(): void {
    this.username = this.authService.getUser();
    this.isLoggedIn = this.authService.isLoggedIn();
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
    // Asegúrate de que el término de búsqueda no esté vacío o solo con espacios
    if (this.searchTerm.trim()) {
      // Redirige a la página de productos con el término de búsqueda en los queryParams
      this.router.navigate(['/products'], { queryParams: { search: this.searchTerm } });
    }
  }
  toggleSearch() {
    this.searchOpen = !this.searchOpen;
  }
}