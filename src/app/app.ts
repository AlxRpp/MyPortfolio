import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroSection } from "./hero-section/hero-section";
import { AboutMe } from "./about-me/about-me";
import { Skills } from "./skills/skills";
import { Projects } from "./projects/projects";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeroSection, AboutMe, Skills, Projects],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'MyPortfolio';
}