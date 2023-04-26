import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  constructor(private route: Router){
    
  }
  isCollapsed: boolean = true;

  toggleCollapsed() {
    this.isCollapsed = !this.isCollapsed;
  }
  @ViewChild('myChart') private chartRef!: ElementRef;

}
