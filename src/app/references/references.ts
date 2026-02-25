import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

interface ReferenceItem {
  subtitle: string;
  images: string[];
}

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './references.html',
  styleUrls: ['./references.css'],
})
export class ReferencesComponent {

  references: ReferenceItem[] = [
    {
      subtitle: 'Revitalizace chodby pro Český svaz cyklistiky',
      images: [
        'assets/revitalizace_chodby.webp',
        'assets/revitalizace_chodby_1.webp',
        'assets/revitalizace_chodby_2.webp',
      ],
    },
    {
      subtitle: 'Montáž minerálních podhledů – Praha',
      images: [
        'assets/mineralni_podhled.webp',
        'assets/mineralni_podhled_1.webp',
        'assets/mineralni_podhled_2.webp',
      ],
    },
    {
      subtitle: 'Realizace sádrokartonů v dřevostavbě',
      images: [
        'assets/drevostavba_3.webp',
        'assets/drevostavba_4.webp',
        'assets/drevostavba_2.webp',
        'assets/drevostavba.webp',
      ],
    }
  ];

  isLightboxOpen = false;
  activeImages: string[] = [];
  activeIndex = 0;

  openLightbox(images: string[], index: number) {
    this.activeImages = images;
    this.activeIndex = index;
    this.isLightboxOpen = true;

    document.documentElement.classList.add('lb-lock');
    document.body.classList.add('lb-lock');
  }

  closeLightbox() {
    this.isLightboxOpen = false;

    document.documentElement.classList.remove('lb-lock');
    document.body.classList.remove('lb-lock');
  }

  next() {
    this.activeIndex =
      (this.activeIndex + 1) % this.activeImages.length;
  }

  prev() {
    this.activeIndex =
      (this.activeIndex - 1 + this.activeImages.length) %
      this.activeImages.length;
  }

  @HostListener('document:keydown', ['$event'])
  onKeydown(e: KeyboardEvent) {
    if (!this.isLightboxOpen) return;

    if (e.key === 'Escape') this.closeLightbox();
    if (e.key === 'ArrowRight') this.next();
    if (e.key === 'ArrowLeft') this.prev();
  }
}
