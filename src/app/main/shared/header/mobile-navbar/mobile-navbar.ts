import { CommonModule } from '@angular/common';
import { Component, inject, input, output } from '@angular/core';
import { SocialLinks } from "../../social-links/social-links";
import { RouterLink } from '@angular/router';
import { TranslateDirective, TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-mobile-navbar',
  imports: [CommonModule, SocialLinks, RouterLink, RouterLink, TranslatePipe, TranslateDirective],
  templateUrl: './mobile-navbar.html',
  styleUrl: './mobile-navbar.scss'
})
export class MobileNavbar {
  private translate = inject(TranslateService);

  german = input<boolean>();
  toggleLang = output<void>();
  closeBurger = output<void>();
  positionGer = '50%';
  positionEn = '-5%';
  active = '#24DD80';
  white = '#ffffff';
}
