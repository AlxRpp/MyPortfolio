import { Component, ElementRef, inject, signal, viewChild } from '@angular/core';
import { TranslateDirective, TranslatePipe, TranslateService } from '@ngx-translate/core';
import { Language } from '../../shared/service/language';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  imports: [CommonModule, TranslatePipe, TranslateDirective],
  templateUrl: './skills.html',
  styleUrls: [
    './skills.scss',
    './skills-mediaQuerrys.scss'
  ]
})
export class Skills {
  private translate = inject(TranslateService);
  public lang = inject(Language);
  isGerman = this.lang.isGerman;
  sticker = signal<string>("A");
  arrow = viewChild.required<ElementRef>('arrow');
  pull = viewChild.required<ElementRef>('pull');
  peeledSticker = viewChild.required<ElementRef>('peeledSticker')
  peeled = false;
  mobile = signal<boolean>(false);


  icons = [
    {
      'name': 'Angular',
      'src': './assets/icons/TeckStack/angular.png'
    },
    {
      'name': 'TypeScript',
      'src': './assets/icons/TeckStack/typeScript.png'
    },
    {
      'name': 'Firebase',
      'src': './assets/icons/TeckStack/firebase.png'
    },
    {
      'name': 'Git',
      'src': './assets/icons/TeckStack/git.png'
    },
    {
      'name': 'Scrum',
      'src': './assets/icons/TeckStack/scrum.png'
    },
    {
      'name': 'JavaScript',
      'src': './assets/icons/TeckStack/javascript.png'
    },
    {
      'name': 'REST-API',
      'src': './assets/icons/TeckStack/restApi.png'
    },
    {
      'name': 'Material Design',
      'src': './assets/icons/TeckStack/materialDesign.png'
    },
    {
      'name': 'HTML',
      'src': './assets/icons/TeckStack/html.png'
    },
    {
      'name': 'CSS',
      'src': './assets/icons/TeckStack/css.png'
    },
  ]


  ngOnInit() {
    this.mobileView();
  }


  stickerPeel() {
    if (this.sticker() === "C") {
      this.stickerContent()
      this.sticker.set("A");
      this.peeled = false
    } else {
      this.sticker.set("B")
      setTimeout(() => {
        this.sticker.set("C")
        this.stickerContent()
        this.peeled = true;
      }, 70)
    }
  }


  stickerContent() {
    if (this.peeled) {
      this.peeledSticker().nativeElement.classList.add('d-none');
      this.arrow().nativeElement.classList.remove('d-none');
      this.pull().nativeElement.classList.remove('d-none');
    } else {
      this.peeledSticker().nativeElement.classList.remove('d-none');
      this.arrow().nativeElement.classList.add('d-none');
      this.pull().nativeElement.classList.add('d-none');
    }
  }


  mobileView() {
    let width = window.innerWidth;
    if (width <= 800) {
      setTimeout(() => {
        this.mobile.set(true);
      }, 2000)
    }
  }
}