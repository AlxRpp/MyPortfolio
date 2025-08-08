import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroSection } from "./main/pages/hero-section/hero-section";
import { AboutMe } from "./main/pages/about-me/about-me";
import { Skills } from "./main/pages/skills/skills";
import { Projects } from "./main/pages/projects/projects";
import { Testimonials } from "./main/pages/testimonials/testimonials";
import { Collaborate } from "./main/pages/collaborate/collaborate";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeroSection, AboutMe, Skills, Projects, Testimonials, Collaborate],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'MyPortfolio';
}