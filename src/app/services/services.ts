import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type ServiceItem = {
  title: string;
  bullets: string[];
  icon: 'build' | 'finish' | 'repair';
};

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.html',
})
export class ServicesComponent {
  services: ServiceItem[] = [
    {
      title: 'Montáž sádrokartonu',
      bullets: [
        'Příčky a předstěny',
        'Podhledy a kazetové stropy',
        'Půdní vestavby',
        'Protipožární konstrukce',
      ],
      icon: 'build',
    },
    {
      title: 'Dokončovací práce',
      bullets: [
        'Tmelení a broušení',
        'Malování bílou barvou',
        'Drobné zednické práce',
      ],
      icon: 'finish',
    },
    {
      title: 'Opravy',
      bullets: [
        'Opravy prasklin',
        'Opravy děr',
        'Opravy poškozených stěn a podhledů',
      ],
      icon: 'repair',
    },
  ];
  
}
