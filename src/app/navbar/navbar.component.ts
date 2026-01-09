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

  scrollToSection(event: Event, targetId: string): void {
    event.preventDefault();

    // Zavřít hned (lepší UX na mobilu) + jistota, že se zavře i případný profil
    this.closeAll();

    const el = document.getElementById(targetId);
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const absoluteTop = rect.top + window.scrollY;

    if (window.innerWidth < 768) {
      // Mobile: align just below the sticky header stack (top bar + nav)
      const headerEl = document.querySelector('app-header') as HTMLElement | null;
      const headerHeight = headerEl?.getBoundingClientRect().height ?? 0;
      const fallbackHeight = 160; // safe fallback if not rendered yet
      const offset = (headerHeight > 0 ? headerHeight : fallbackHeight) + 12;

      const targetTop = Math.max(0, absoluteTop - offset);
      window.scrollTo({ top: targetTop, behavior: 'smooth' });
    } else {
      // Desktop: center the section in the viewport
      const targetTop = absoluteTop - window.innerHeight / 2 + rect.height / 2;
      window.scrollTo({ top: targetTop, behavior: 'smooth' });
    }
  }
}
