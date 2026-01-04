import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  mobileOpen = false;
  profileOpen = false;

  toggleMobile(): void {
    this.mobileOpen = !this.mobileOpen;
  }

  toggleProfile(event: MouseEvent): void {
    event.stopPropagation();
    this.profileOpen = !this.profileOpen;
  }

  closeAll(): void {
    this.mobileOpen = false;
    this.profileOpen = false;
  }
}
