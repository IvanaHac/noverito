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
        'assets/references1.jpg',
        'assets/references2.jpg',
        'assets/references3.jpg',
        'assets/references4.jpg',
      ],
    },
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
    if (!this.activeImages.length) return;
    this.activeIndex = (this.activeIndex + 1) % this.activeImages.length;
  }

  prev() {
    if (!this.activeImages.length) return;
    this.activeIndex =
      (this.activeIndex - 1 + this.activeImages.length) % this.activeImages.length;
  }

  @HostListener('document:keydown', ['$event'])
  onKeydown(e: KeyboardEvent) {
    if (!this.isLightboxOpen) return;

    if (e.key === 'Escape') this.closeLightbox();
    if (e.key === 'ArrowRight') this.next();
    if (e.key === 'ArrowLeft') this.prev();
  }
}
