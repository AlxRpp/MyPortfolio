import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProjectsData } from '../../shared/service/projectsData';
import { Project } from '../../shared/interfaces/project.interface';

@Component({
  selector: 'app-single-project',
  imports: [CommonModule, RouterLink],
  templateUrl: './single-project.html',
  styleUrl: './single-project.scss'
})
export class SingleProject {
  project?: Project;
  private slug = "";

  constructor(private route: ActivatedRoute, private router: Router, private projectsService: ProjectsData) {
    // const slug = this.route.snapshot.paramMap.get('slug');
    // this.project = this.projectsService.projects.find(p => p.slug === slug);
  }

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


}
