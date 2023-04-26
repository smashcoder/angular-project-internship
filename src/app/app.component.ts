import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.cssng ser']
})
export class AppComponent {
  isLoggedIn = false;
  title = 'demo';

  constructor(private authService: AuthService) {}

  onLogin(credentials: { email: string, password: string }) {
    this.authService.login(credentials.email, credentials.password).subscribe(
      () => {
        // Authentication succeeded
        this.isLoggedIn = true;
      },
      (      error: any) => {
        // Authentication failed
        console.error(error);
      }
    );
  }

  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }
}
