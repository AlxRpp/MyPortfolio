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
  hello = signal<string>('Hello world');
  background = signal<boolean>(false);
  showHand = signal<boolean>(false);
  bgBlue = '#3355FF'
  bgTransparent = 'transparent'
  wavingHand = viewChild.required<ElementRef>('wavingHand')


  startGreeting() {
    if (this.showHand()) {
      return
    } else {
      this.hello.set("I´M ALEXANDER RUPPEL")
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
        this.hello.set('Hello world')
        this.background.set(false);
      }, 250)
    }

  }



}
