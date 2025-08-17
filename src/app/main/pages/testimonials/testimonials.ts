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
      content: 'Mit Alex bei dem Projekt Kochwelt zu arbeiten war eine durchweg positive Erfahrung. Er hat ein ausgeprägtes Gespür für sauberen Code und ein klares Designverständnis. Besonders geschätzt habe ich, dass er nie den Überblick verliert und auch unter Zeitdruck strukturiert und lösungsorientiert bleibt.',
      name: 'Frank Möllers',
      role: 'Frontend Devloper',
      url: 'https://www.linkedin.com/in/alexander-ruppel-450706375/'
    },
    {
      content: 'Ich habe mit Alexander bei der Entwicklung der App Join zusammengearbeitet und war von Anfang an beeindruckt von seiner Zuverlässigkeit und Termintreue. Schon in der frühen Phase hat er das Projekt spürbar vorangetrieben. Seine strukturierte Arbeitsweise und seine offene Kommunikation machten die Zusammenarbeit nicht nur effizient, sondern auch sehr angenehm.',
      name: 'Manuel Horn',
      role: 'Frontend Developer',
      url: 'https://quickref.me/index.html'
    }, {
      content: 'Alex beeindruckt durch seine Weitsicht und sein Engagement. Er denkt Prozesse bis zum Ende durch, bringt proaktiv Ideen ein und übernimmt Verantwortung, sobald es nötig ist. Mit ihm im Team fühlt man sich nicht nur fachlich unterstützt, sondern auch menschlich abgeholt.',
      name: 'Michael Scholz',
      role: 'Fullstack Devloper',
      url: 'https://www.linkedin.com/in/junus-ergin/'
    },
  ]



  openLinkedInProfil(url: string) {
    window.open(url, '_blank')
  }
}
