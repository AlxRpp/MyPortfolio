import { CommonModule } from '@angular/common';
import { Component, signal, viewChild, ElementRef } from '@angular/core';
import { SocialLinks } from "../../social-links/social-links";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mobile-navbar',
  imports: [CommonModule, SocialLinks, RouterLink],
  templateUrl: './mobile-navbar.html',
  styleUrl: './mobile-navbar.scss'
})
export class MobileNavbar {
  english: boolean = true;
  german: boolean = false;
  currentLanguage = signal<string>("english")
  toggleGER = '50%';
  toggleENG = '-5%';
  active = '#24DD80';
  white = '#ffffff'
  // mobileNavBar = viewChild.required<ElementRef>('mobileNav');


  toggleLanguage(lang: string) {
    this.currentLanguage.set(lang);
    if (this.currentLanguage() == "english") {
      this.english = true;
      this.german = false;
    } else {
      this.german = true;
      this.english = false;
    }
  }


}
