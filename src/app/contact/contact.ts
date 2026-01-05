import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.html',
})
export class ContactComponent {
  phoneDisplay = '+420 776 750 713';
  phoneLink = '+420 776 750 713';

  emailDisplay = 'info@noverito.cz';
  emailLink = 'info@noverito.cz';
}
