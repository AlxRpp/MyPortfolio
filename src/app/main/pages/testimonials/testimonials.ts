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
      content: 'Ich habe mit Alexander bei der Entwicklung der App Join zusammengearbeitet und war von Beginn an beeindruckt von seiner Zuverlässigkeit in Bezug auf die Einhaltung von Terminen und die Erfüllung seiner Aufgaben. Schon in der Anfangsphase war deutlich zu spüren, dass er das Projekt aktiv vorantreiben wollte. Er arbeitet sehr strukturiert und organisiert, was die Zusammenarbeit enorm erleichtert hat. Zudem ist er ein ausgesprochen kommunikativer Teamplayer, mit dem sich Herausforderungen konstruktiv besprechen und effizient lösen ließen. Alles in allem ist Alexander ein kompetenter, hilfsbereiter und äußerst zuverlässiger Partner, mit dem die Zusammenarbeit nicht nur produktiv, sondern auch angenehm war.',
      name: 'Manuel Horn',
      role: 'Frontend Developer',
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
