import { Component, inject } from '@angular/core';
import { Button } from "../shared/button/button";
import { ProjectsData } from '../shared/service/projectsData';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, Button],
  templateUrl: './projects.html',
  styleUrls: [
    './projects.scss',
    './projects-mediaQuerrys.scss'
  ]
})
export class Projects {
  private projectsData: any = inject(ProjectsData);
  public projects = this.projectsData.projects;
}