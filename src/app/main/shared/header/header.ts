import { CommonModule } from '@angular/common';
import { Component, ElementRef, signal, viewChild } from '@angular/core';
import { MobileNavbar } from "./mobile-navbar/mobile-navbar";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, MobileNavbar, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  english: boolean = true;
  german: boolean = false;
  currentLanguage = signal<string>("english")
  toggleGER = '50%';
  toggleENG = '-5%';
  active = '#24DD80';
  white = '#ffffff'
  mobileNavBar = viewChild.required<ElementRef>('mobileNav');


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

  toggleBurgerMenu() {
    this.mobileNavBar().nativeElement.classList.toggle('transform-BurgerMenu')

  }
}