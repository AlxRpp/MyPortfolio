import { CommonModule } from '@angular/common';
import { Component, ElementRef, inject, input, viewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateDirective, TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, TranslateDirective, TranslatePipe],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  private translate = inject(TranslateService)

  class = input<string>("");

  constructor(private router: Router) { }

  git = viewChild.required<HTMLImageElement>('git');
  linkedIn = viewChild.required<HTMLImageElement>('linkedIn');
  mail = viewChild.required<HTMLImageElement>('mail');


  toggleAnimation(ref: HTMLImageElement, direction: 'in' | 'out') {
    ref.classList.add(direction === 'in' ? 'roll-in' : 'roll-out');
    ref.classList.remove(direction === 'out' ? 'roll-in' : 'roll-out');
  }

  openLink(url: string) {
    window.open(url, '_blank')
  }

  navigateToLegal() {
    this.router.navigateByUrl('legal-notice');
  }
}
