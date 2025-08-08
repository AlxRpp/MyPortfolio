import { Component, ElementRef, viewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {

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
