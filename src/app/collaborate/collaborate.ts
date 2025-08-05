import { Component, signal } from '@angular/core';
import { Button } from "../shared/button/button";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-collaborate',
  imports: [Button, CommonModule],
  templateUrl: './collaborate.html',
  styleUrl: './collaborate.scss'
})
export class Collaborate {

  checked = signal<boolean>(false)

  toggleCheckbox() {
    this.checked.update(value => !value);
  }

  test() {
    console.log('Hallo');

  }

}
