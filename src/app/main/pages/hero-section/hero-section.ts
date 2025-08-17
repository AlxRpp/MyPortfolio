import { AfterViewInit, Component, ElementRef, inject, signal, viewChild } from '@angular/core';
import { Header } from "../../shared/header/header";
import { Button } from "../../shared/button/button";
import { CommonModule } from '@angular/common';
import { SocialLinks } from "../../shared/social-links/social-links";
import { TranslateDirective, TranslatePipe, TranslateService } from '@ngx-translate/core';
import { gsap, random } from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

@Component({
  selector: 'app-hero-section',
  imports: [CommonModule, Header, Button, SocialLinks, TranslatePipe, TranslateDirective],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss'
})
export class HeroSection implements AfterViewInit {
  private translate = inject(TranslateService)
  name = signal<string>('Alex :)')
  background = signal<boolean>(false);
  showHand = signal<boolean>(false);
  imageHover = signal<boolean>(false);
  wavingHand = viewChild.required<ElementRef>('wavingHand');
  bgBlue = '#3355FF';
  bgTransparent = 'transparent';
  blackAndWhite = 'grayscale(1)';
  colored = 'grayscale(0)'

  greeting = signal<'hero.greetingDefault' | 'hero.greetingActive'>('hero.greetingDefault');
  params = signal<{ name: string }>({ name: 'Alexander Ruppel' })

  ngAfterViewInit(): void {
    this.mobileView();


    document.fonts.ready.then(() => {
      const firstsplit = SplitText.create(".frontSplit", { type: "chars, lines, words" });
      gsap.from(firstsplit.chars, {
        duration: 2,
        yPercent: "random([-100, 100])",
        xPercent: "random([-100, 100])",
        rotation: "random(-90, 90)",
        autoAlpha: 0,
        ease: "elastic.out",
        stagger: {
          amount: .25,
          from: "end",
          repeat: 0
        }
      });
    });


    document.fonts.ready.then(() => {
      const split = SplitText.create(".devSplit", {
        type: "chars, lines, words",
        charsClass: "char++"
      });
      gsap.from(split.chars, {
        duration: 2,
        x: 500,
        autoAlpha: 0,
        ease: "back.out",
        stagger: {
          amount: 2,
          from: "start",
          repeat: 0
        }
      });


      const colors = ["#24DD80", "#1AA8B5", "#1073EA"];
      split.chars.forEach(char => {
        gsap.to(char, {
          color: () => gsap.utils.random(colors),
          repeat: 5,
          yoyo: true,
          duration: gsap.utils.random(0.2, 0.6),
          repeatRefresh: true
        });
      });
    });
  };


  startGreeting() {
    if (this.showHand()) {
      return
    } else {
      this.greeting.set('hero.greetingActive')
      this.background.set(true);
      this.showHand.set(true);
      setTimeout(() => {
        this.wavingHand().nativeElement.classList.add('start-greeting');
      }, 5);
    }
  }

  stopGreeting() {
    if (!this.showHand()) {
      return
    } else {
      this.wavingHand().nativeElement.classList.add('stop-greeting');
      setTimeout(() => {
        this.showHand.set(false);
        this.greeting.set('hero.greetingDefault')
        this.background.set(false);
      }, 250)
    }
  }

  addColor() {
    this.imageHover.set(true);
    this.name.set('Alex :D');
  }

  addGrayscale() {
    this.imageHover.set(false);
    this.name.set('Alex :)');

  }

  mobileView() {
    let width = window.innerWidth;
    if (width <= 800) {
      setTimeout(() => {
        this.startGreeting();
        this.addColor();
      }, 2000)
    }
  }
}
