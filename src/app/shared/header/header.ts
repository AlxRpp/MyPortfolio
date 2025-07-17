import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  english: boolean = true;
  german: boolean = false;
  currentLanguage = signal<string>("english")
  toggleGER = '50%';
  toggleENG = '-5%';
  active = '#24DD80';
  white = '#ffffff'

  toggleLanguage(lang: string) {
    this.currentLanguage.set(lang);
    if (this.currentLanguage() == "english") {
      this.english = true;
      this.german = false;
    } else {
      this.german = true;
      this.english = false;
    }
  }

  toggleBurgerMenu() {
    console.log("Burger is Open");

  }
}