import { Component } from '@angular/core';
import { Header } from "../shared/header/header";
import { Button } from "../shared/button/button";

@Component({
  selector: 'app-hero-section',
  imports: [Header, Button],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss'
})
export class HeroSection {

}
