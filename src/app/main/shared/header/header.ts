import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, inject, signal, viewChild } from '@angular/core';
import { MobileNavbar } from "./mobile-navbar/mobile-navbar";
import { RouterLink } from '@angular/router';
import { TranslateDirective, TranslatePipe, TranslateService, } from '@ngx-translate/core';
import { Language } from '../service/language';

@Component({
  selector: 'app-header',
  imports: [CommonModule, MobileNavbar, RouterLink, TranslatePipe, TranslateDirective],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  private translate = inject(TranslateService);
  public lang = inject(Language)
  isGerman = this.lang.isGerman
  positionGer = '50%'
  positionEn = '-5%'
  active = '#24DD80';
  white = '#ffffff'
  mobileNavBar = viewChild.required<ElementRef>('mobileNav');

  @HostListener('window:resize')
  onResize() {
    if (window.innerWidth > 800) {
      this.closeBurgerMenu()
    }
  }

  toggleLanguage(lang: string) {
    if (lang === 'english') {
      this.isGerman.set(false)
      this.translate.use('en')
    } else {
      this.translate.use('de')
      this.isGerman.set(true);
    }
  }

  flipLanguage() {
    this.isGerman.update(value => !value);
    this.toggleBurgerMenu();
    if (this.isGerman()) {
      this.translate.use('de')
    } else {
      this.translate.use('en')
    }
  }

  toggleBurgerMenu() {
    this.mobileNavBar().nativeElement.classList.toggle('transform-BurgerMenu')
  }

  closeBurgerMenu() {
    this.mobileNavBar().nativeElement.classList.remove('transform-BurgerMenu')

  }
}