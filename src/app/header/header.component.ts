import { Component, HostListener, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ MatButtonModule, CommonModule ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  constructor(private authService: AuthService) {}

  isTransparent: boolean = true;
  isConnected: boolean = this.authService.isAuthenticated();
  name: string = this.authService.getValueFromToken(this.authService.getToken(), 'name');

  ngOnInit(): void {
    this.onWindowScroll();
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollPosition = window.pageYOffset;
    this.isTransparent = scrollPosition > 50;
  }

  logout(): void {
    this.authService.logout();
    this.isConnected = false;
  }
}
