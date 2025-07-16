import { Component, ElementRef, signal, viewChild } from '@angular/core';
import { Header } from "../shared/header/header";
import { Button } from "../shared/button/button";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-section',
  imports: [CommonModule, Header, Button],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss'
})
export class HeroSection {
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




}
