import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProjectsData } from '../../shared/service/projectsData';
import { Project } from '../../shared/interfaces/project.interface';
import { TranslateDirective, TranslatePipe, TranslateService } from '@ngx-translate/core';
import { Header } from '../../shared/header/header';
import { Button } from '../../shared/button/button';

@Component({
  selector: 'app-single-project',
  imports: [CommonModule, RouterLink, TranslatePipe, TranslateDirective, Header, Button],
  templateUrl: './single-project.html',
  styleUrls: [
    './single-project.scss',
    'single-project-mediaQuerrys.scss'
  ]
})
export class SingleProject {

  project?: Project;
  private slug = "";
  private translate = inject(TranslateService)

  constructor(private route: ActivatedRoute, private router: Router, private projectsService: ProjectsData) { }

  ngOnInit() {
    this.route.paramMap.subscribe(pm => {
      this.slug = pm.get('slug') ?? '';
      this.project = this.projectsService.getBySlug(this.slug)
    });
  }

  next() {
    const next = this.projectsService.nextSlug(this.slug);
    this.router.navigate(['/projects', next])
  }

  prev() {
    const prev = this.projectsService.prevSlug(this.slug);
    this.router.navigate(['/projects', prev])
  }

  goToGit() {
    switch (true) {
      case this.slug === "join":
        window.open('https://github.com/AlxRpp/JOIN-427', '_blank')
        break;
      case this.slug === "alien-adventure":
        window.open('https://github.com/AlxRpp/AlienAdventure', '_blank')
        break;
      case this.slug === "pokedex":
        window.open('https://github.com/AlxRpp/PokeDex', '_blank')
        break;
      default:
        window.open('https://github.com/AlxRpp', '_blank')
        break;
    }
  }


  projectLiveTest(url?: string) {
    window.open(url, '_blank')
  }
}
