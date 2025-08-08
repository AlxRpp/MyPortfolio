import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroSection } from "./hero-section/hero-section";
import { AboutMe } from "./main/pages/about-me/about-me";
import { Skills } from "./skills/skills";
import { Projects } from "./projects/projects";
import { Testimonials } from "./testimonials/testimonials";
import { Collaborate } from "./main/pages/collaborate/collaborate";
import { Footer } from "./main/shared/footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeroSection, AboutMe, Skills, Projects, Testimonials, Collaborate, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'MyPortfolio';
}