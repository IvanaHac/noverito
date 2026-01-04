import { Component } from '@angular/core';
import { TopBarComponent } from '../top-bar/top-bar.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TopBarComponent, NavbarComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent {}
