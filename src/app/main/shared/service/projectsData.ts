import { Injectable } from '@angular/core';
import { Project } from '../../shared/interfaces/project.interface'

@Injectable({
  providedIn: 'root'
})
export class ProjectsData {

  constructor() { }

  projects: Project[] = [
    {
      slug: 'join',
      title: 'Join',
      description: 'join.description',
      implDetails: 'join.implDetails',
      url: './assets/images/projects/Laptop.png',
      featured: true,
      duration: 3,
    },
    {
      slug: 'alien-adventure',
      title: 'Alien Adventure',
      description: 'alien.description',
      implDetails: 'alien.implDetails',
      url: './assets/images/projects/alienAdventure.png',
      featured: false,
      duration: 6,
    },
    {
      slug: 'pokedex',
      title: 'Pokédex',
      description: 'pokedex.description',
      implDetails: 'pokedex.implDetails',
      url: './assets/images/projects/pokedex.png',
      featured: false,
      duration: 4,
    }
  ]

  private slugs() {
    return this.projects.map(p => p.slug)
  };

  getBySlug(slug: string) {
    return this.projects.find(p => p.slug === slug)
  };

  nextSlug(current: string) {
    const slugs = this.slugs();
    const i = slugs.indexOf(current)
    if (i === -1) {
      return slugs[0]
    }
    return slugs[(i + 1) % slugs.length]
  }

  prevSlug(current: string) {
    const slugs = this.slugs();
    const i = slugs.indexOf(current)
    if (i === -1) {
      return slugs[0]
    }
    return slugs[(i - 1 + slugs.length) % slugs.length]
  }

}


