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
  isGerman = signal<boolean>(false);
  positionGer = '50%'
  positionEn = '-5%'
  active = '#24DD80';
  white = '#ffffff'
  mobileNavBar = viewChild.required<ElementRef>('mobileNav');

  toggleLanguage(lang: string) {
    if (lang === 'english') {
      this.isGerman.set(false)
      console.log("deutsch?", this.isGerman());
    } else {
      this.isGerman.set(true);
      console.log("deutsch?", this.isGerman());
    }
  }

  flipLanguage() {
    this.isGerman.update(value => !value)
  }

  toggleBurgerMenu() {
    this.mobileNavBar().nativeElement.classList.toggle('transform-BurgerMenu')
  }
}