import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top-bar.component.html',
})
export class TopBarComponent {
  @Input() phone = '608 686 989';
  @Input() areaText = 'Praha & Středočeský kraj • sádrokartonové systémy';
  @Input() inquiryHref = '#poptavka';
}
