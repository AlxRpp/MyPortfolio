import { Component } from '@angular/core';
import { AboutMe } from '../about-me/about-me';
import { Collaborate } from '../collaborate/collaborate';
import { HeroSection } from '../hero-section/hero-section';
import { Projects } from '../projects/projects';
import { Skills } from '../skills/skills';
import { Testimonials } from '../testimonials/testimonials';

@Component({
  selector: 'app-home',
  imports: [HeroSection, AboutMe, Skills, Projects, Testimonials, Collaborate],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
