import { Component, input, signal } from '@angular/core';
import { Button } from "../shared/button/button";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-collaborate',
  imports: [Button, CommonModule, FormsModule],
  templateUrl: './collaborate.html',
  styleUrl: './collaborate.scss'
})
export class Collaborate {

  checked = signal<boolean>(false)
  name = signal<string>("");

  toggleCheckbox() {
    this.checked.update(value => !value);
  }

  test() {
    console.log(this.name());
  }

}
