import { Component } from '@angular/core';

@Component({
  selector: 'app-home-hero',
  standalone: true,
  templateUrl: './home-hero.component.html',
})
export class HomeHeroComponent {
  scrollToSection(event: Event, targetId: string): void {
    event.preventDefault();
    const el = document.getElementById(targetId);
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const absoluteTop = rect.top + window.scrollY;
    if (window.innerWidth < 768) {
      const headerEl = document.querySelector('app-header') as HTMLElement | null;
      const headerHeight = headerEl?.getBoundingClientRect().height ?? 0;
      const fallbackHeight = 160;
      const offset = (headerHeight > 0 ? headerHeight : fallbackHeight) + 12;
      const targetTop = Math.max(0, absoluteTop - offset);
      window.scrollTo({ top: targetTop, behavior: 'smooth' });
    } else {
      const targetTop = absoluteTop - window.innerHeight / 2 + rect.height / 2;
      window.scrollTo({ top: Math.max(0, targetTop), behavior: 'smooth' });
    }
  }
}
