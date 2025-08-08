import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectsData } from '../../shared/service/projectsData';

@Component({
  selector: 'app-single-project',
  imports: [CommonModule],
  templateUrl: './single-project.html',
  styleUrl: './single-project.scss'
})
export class SingleProject {
  project: any;

  constructor(private route: ActivatedRoute, private projectsService: ProjectsData) {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.project = this.projectsService.projects.find(p => p.slug === slug);
  }
}
