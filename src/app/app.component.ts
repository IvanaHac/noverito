import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HomeHeroComponent } from "./home-hero/home-hero.component";
import { AboutUsComponent } from "./about-us/about-us";
import {ServicesComponent} from "./services/services";
import {ContactComponent} from "./contact/contact";
import {InquiryFormComponent} from "./inquiry-form/inquiry-form";
import {ReferencesComponent} from "./references/references";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, HomeHeroComponent, AboutUsComponent, ServicesComponent, ContactComponent, ReferencesComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'noverito';
}
