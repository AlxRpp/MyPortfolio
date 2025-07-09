import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  english: boolean = true;
  german: boolean = false;

  toggleLanguageToEnglish() {
    this.english = true;
    this.german = false;
  }

  toggleLanguageToGerman() {
    this.english = false;
    this.german = true;
  }
}