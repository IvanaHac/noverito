import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HomeHeroComponent } from "./home-hero/home-hero.component";
import { FooterComponent } from "./footer/footer.component";
import { AboutUsComponent } from "./about-us/about-us";
import {ServicesComponent} from "./services/services";
import {ContactComponent} from "./contact/contact";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, HomeHeroComponent, FooterComponent, AboutUsComponent, ServicesComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'noverito';
}
