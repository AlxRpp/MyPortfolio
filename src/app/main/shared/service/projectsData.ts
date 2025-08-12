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
      detailImg: './assets/images/projects/join-detailed.png',
      featured: true,
      duration: 3,
      technology: [{
        src: "./assets/icons/TeckStack/javascript.png",
        name: "JavaScript"
      },
      {
        src: "./assets/icons/TeckStack/html.png",
        name: "HTML"
      },
      {
        src: "./assets/icons/TeckStack/css.png",
        name: "CSS"
      },
      {
        src: "/assets/icons/TeckStack/git.png",
        name: "GIT"
      },
      {
        src: "./assets/icons/TeckStack/firebase.png",
        name: "Firebase"
      },
      {
        src: "./assets/icons/TeckStack/scrum.png",
        name: "Scrum"
      }]
    },
    {
      slug: 'alien-adventure',
      title: 'Alien Adventure',
      description: 'alien.description',
      implDetails: 'alien.implDetails',
      url: './assets/images/projects/alienAdventure.png',
      detailImg: './assets/images/projects/join-detailed.png',
      featured: false,
      duration: 6,
      technology: [{
        src: "./assets/icons/TeckStack/javascript.png",
        name: "JavaScript"
      },
      {
        src: "./assets/icons/TeckStack/html.png",
        name: "HTML"
      },
      {
        src: "./assets/icons/TeckStack/css.png",
        name: "CSS"
      },
      {
        src: "/assets/icons/TeckStack/git.png",
        name: "GIT"
      }]
    },
    {
      slug: 'pokedex',
      title: 'Pokédex',
      description: 'pokedex.description',
      implDetails: 'pokedex.implDetails',
      url: './assets/images/projects/pokedex.png',
      detailImg: './assets/images/projects/join-detailed.png',
      featured: false,
      duration: 4,
      technology: [{
        src: "./assets/icons/TeckStack/javascript.png",
        name: "JavaScript"
      },
      {
        src: "./assets/icons/TeckStack/html.png",
        name: "HTML"
      },
      {
        src: "./assets/icons/TeckStack/css.png",
        name: "CSS"
      },
      {
        src: "/assets/icons/TeckStack/git.png",
        name: "GIT"
      }, {
        src: "/assets/icons/TeckStack/restApi.png",
        name: "REST-API"
      }]
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


