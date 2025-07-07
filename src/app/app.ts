import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroSection } from "./hero-section/hero-section";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeroSection],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'MyPortfolio';
}
