import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Language {

  constructor() { }

  isGerman = signal<boolean>(false)
}
