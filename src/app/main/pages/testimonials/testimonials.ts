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
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis minus ad possimus delectusdignissimos atque voluptatum ipsum libero aliquid.Minima neque iusto nostrum unde a? Vero voluptatibus possimus natus nostrum.',
      name: 'Alexander Ruppel',
      role: 'Frontend Devloper',
      url: 'https://www.linkedin.com/in/alexander-ruppel-450706375/'
    },
    {
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis minus ad possimus delectusdignissimos atque voluptatum ipsum libero aliquid.Minima neque iusto nostrum unde a? Vero voluptatibus possimus natus nostrum.',
      name: 'Oliver Jung ',
      role: 'Fullstack Developer',
      url: 'https://quickref.me/index.html'
    }, {
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis minus ad possimus delectusdignissimos atque voluptatum ipsum libero aliquid.Minima neque iusto nostrum unde a? Vero voluptatibus possimus natus nostrum.',
      name: 'Junus Ergin',
      role: 'Fullstack Devloper',
      url: 'https://www.linkedin.com/in/junus-ergin/'
    },
  ]



  openLinkedInProfil(url: string) {
    window.open(url, '_blank')
  }
}
