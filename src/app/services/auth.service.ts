import { Injectable } from '@angular/core';
 
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUser: string | null = null;
 
  constructor() {}
  getUser(): string | null {
    return localStorage.getItem('username') || null;
  }
 
  isLoggedIn(): boolean {
    return this.getUser() !== null;
  }
  login(username: string) {
    this.currentUser = username;
    localStorage.setItem('username', username);
  }
  logout() {
    this.currentUser = null;
    localStorage.removeItem('username');
  }
}