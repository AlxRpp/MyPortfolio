import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslateDirective, TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-testimonials',
  imports: [CommonModule, TranslatePipe, TranslateDirective],
  templateUrl: './testimonials.html',
  styleUrls: [
    './testimonials.scss',
    './testimonials-mediaQuerrys.scss'
  ]
})
export class Testimonials {
  private translate = inject(TranslateService)
  testimonials = [
    {
      content: 'testimonials.cardFrank',
      name: 'Frank Möllers',
      role: 'Frontend Devloper',
      url: 'https://www.linkedin.com/in/alexander-ruppel-450706375/'
    },
    {
      content: 'testimonials.cardManuel',
      name: 'Manuel Horn',
      role: 'Frontend Developer',
      url: 'https://quickref.me/index.html'
    }, {
      content: 'testimonials.cardMichael',
      name: 'Michael Scholz',
      role: 'Fullstack Devloper',
      url: 'https://www.linkedin.com/in/junus-ergin/'
    },
  ]



  openLinkedInProfil(url: string) {
    window.open(url, '_blank')
  }
}
