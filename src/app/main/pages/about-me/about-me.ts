import { Component } from '@angular/core';
import { Button } from "../../shared/button/button";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-me',
  imports: [Button, CommonModule],
  templateUrl: './about-me.html',
  styleUrls: [
    './about-me.scss',
    './about-me-mediaQuerrys.scss'
  ]
})
export class AboutMe {

}
