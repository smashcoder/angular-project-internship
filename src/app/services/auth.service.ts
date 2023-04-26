import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedValue = false;

  login(email: string, password: string): Observable<boolean> {
    // Replace with your actual authentication logic
    if (email === 'user@example.com' && password === 'password') {
      this.isAuthenticatedValue = true;
      return of(true);
    }
    return of(false);
  }

  logout(): void {
    this.isAuthenticatedValue = false;
  }

  isAuthenticated(): boolean {
    console.log('isAuthenticated called');
    return this.isAuthenticatedValue;
  }
  
}
