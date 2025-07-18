import { AfterViewInit, Component, ElementRef, signal, viewChild } from '@angular/core';
import { Header } from "../shared/header/header";
import { Button } from "../shared/button/button";
import { CommonModule } from '@angular/common';
import { SocialLinks } from "../shared/social-links/social-links";

@Component({
  selector: 'app-hero-section',
  imports: [CommonModule, Header, Button, SocialLinks],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss'
})
export class HeroSection implements AfterViewInit {
  greeting = signal<string>('Hello world');
  name = signal<string>('Alex :)')
  background = signal<boolean>(false);
  showHand = signal<boolean>(false);
  imageHover = signal<boolean>(false);
  wavingHand = viewChild.required<ElementRef>('wavingHand');
  bgBlue = '#3355FF';
  bgTransparent = 'transparent';
  blackAndWhite = 'grayscale(1)';
  colored = 'grayscale(0)'

  ngAfterViewInit(): void {
    this.MobileView();
  }

  startGreeting() {
    if (this.showHand()) {
      return
    } else {
      this.greeting.set("I´M ALEXANDER RUPPEL")
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
        this.greeting.set('Hello world')
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

  MobileView() {
    let width = window.innerWidth;
    if (width <= 720) {
      setTimeout(() => {
        this.startGreeting();
        this.addColor();
      }, 2000)
    }

  }




}
