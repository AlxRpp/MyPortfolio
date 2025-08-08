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
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      implDetails: 'jsdhfjks kjashdjk aksdjfhkjas hsjgdfjhsvf ksjhdfkjas hfdk b vs ldfhsjkfh shbdfkjshf a sdjhsdkjfh sfskdfhs f ksdjhf sdf llkhdsf ',
      url: './assets/images/projects/Laptop.png',
      featured: true,
      duration: 3,
    },
    {
      slug: 'alien-adventure',
      title: 'Alien Adventure',
      description: 'A space-themed Jump&Run-Game',
      implDetails: 'jsdhfjks kjashdjk aksdjfhkjas hsjgdfjhsvf ksjhdfkjas hfdk b vs ldfhsjkfh shbdfkjshf a sdjhsdkjfh sfskdfhs f ksdjhf sdf llkhdsf ',
      url: './assets/images/projects/alienAdventure.png',
      featured: false,
      duration: 3,
    }, {
      slug: 'pokedex',
      title: 'Pokédex',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      implDetails: 'jsdhfjks kjashdjk aksdjfhkjas hsjgdfjhsvf ksjhdfkjas hfdk b vs ldfhsjkfh shbdfkjshf a sdjhsdkjfh sfskdfhs f ksdjhf sdf llkhdsf ',
      url: './assets/images/projects/pokedex.png',
      featured: false,
      duration: 3,
    },
  ]
}


