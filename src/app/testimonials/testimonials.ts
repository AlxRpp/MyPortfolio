import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  imports: [CommonModule],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss'
})
export class Testimonials {
  testimonials = [
    {
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis minus ad possimus delectusdignissimos atque voluptatum ipsum libero aliquid.Minima neque iusto nostrum unde a? Vero voluptatibus possimus natus nostrum.',
      name: 'Alexander Ruppel',
      role: 'Frontend Devloper',
      url: 'https://www.linkedin.com/in/alexander-ruppel-450706375/'
    },
    {
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis minus ad possimus delectusdignissimos atque voluptatum ipsum libero aliquid.Minima neque iusto nostrum unde a? Vero voluptatibus possimus natus nostrum.',
      name: 'Karina Ruppel',
      role: 'Ehefrau',
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
