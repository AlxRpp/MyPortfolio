import { Component, inject } from '@angular/core';
import { Button } from "../../shared/button/button";
import { ProjectsData } from '../../shared/service/projectsData';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { TranslateDirective, TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, Button, RouterLink, TranslatePipe, TranslateDirective],
  templateUrl: './projects.html',
  styleUrls: [
    './projects.scss',
    './projects-mediaQuerrys.scss'
  ]
})
export class Projects {
  private translate = inject(TranslateService)
  constructor(private router: Router) { }

  private projectsData: any = inject(ProjectsData);
  public projects = this.projectsData.projects;

  navigateToSingleProject(slug: string) {
    this.router.navigateByUrl(`projects/`)
    console.log(slug);

  }
}