import { Component } from '@angular/core';
import { Button } from "../shared/button/button";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-me',
  imports: [Button, CommonModule],
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss'
})
export class AboutMe {
  talk = "Let’s talk"
}
