import { Component } from '@angular/core';
import { NavigationEnd, Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  classList: any;
  currentRoute: string = '';
  constructor(private route: Router, private router: ActivatedRoute, private authService: AuthService) {

  }
  isCollapsed: boolean = false;

  toggleCollapsed() {
    this.isCollapsed = !this.isCollapsed;
  }
  ngOnInit() {
    this.route.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = this.router.snapshot.firstChild?.routeConfig?.path || '';
      }
    });
  }

  Logout(): void {
    console.log('sidebar logout called');
    if (this.authService.isAuthenticated()) {
      this.authService.logout();
    }
  }
  
}
