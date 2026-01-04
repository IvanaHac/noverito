import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-hero.component.html',
})
export class HomeHeroComponent {
  // texty si kdykoliv vyměníš bez zásahu do HTML
  eyebrow = 'SÁDROKARTONOVÉ SYSTÉMY';
  headlineTop = 'Precizní interiéry';
  headlineAccent = 'bez kompromisů';
  subtext =
    'Navrhujeme a realizujeme sádrokartonové systémy pro moderní byty, rodinné domy a komerční prostory.';

  // cesta k fotce (dej do /src/assets/)
  heroImageUrl = 'assets/hero-interier.jpg';
}
