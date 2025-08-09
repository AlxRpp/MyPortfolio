import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, signal, viewChild } from '@angular/core';
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

  @HostListener('window:resize')
  onResize() {
    if (window.innerWidth > 720) {
      this.closeBurgerMenu()
    }
  }

  toggleLanguage(lang: string) {
    if (lang === 'english') {
      this.isGerman.set(false)
    } else {
      this.isGerman.set(true);
    }
  }

  flipLanguage() {
    this.isGerman.update(value => !value)
    this.toggleBurgerMenu();
  }

  toggleBurgerMenu() {
    this.mobileNavBar().nativeElement.classList.toggle('transform-BurgerMenu')
  }

  closeBurgerMenu() {
    this.mobileNavBar().nativeElement.classList.remove('transform-BurgerMenu')

  }
}