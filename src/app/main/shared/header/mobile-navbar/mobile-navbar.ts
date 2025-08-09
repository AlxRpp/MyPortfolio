import { CommonModule } from '@angular/common';
import { Component, signal, viewChild, ElementRef, input, output } from '@angular/core';
import { SocialLinks } from "../../social-links/social-links";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mobile-navbar',
  imports: [CommonModule, SocialLinks, RouterLink],
  templateUrl: './mobile-navbar.html',
  styleUrl: './mobile-navbar.scss'
})
export class MobileNavbar {
  german = input<boolean>();
  toggleLang = output<void>()
  positionGer = '50%';
  positionEn = '-5%';
  active = '#24DD80';
  white = '#ffffff';
}
