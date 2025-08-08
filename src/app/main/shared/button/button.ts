import { CommonModule } from '@angular/common';
import { Component, input, Input, signal } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.html',
  styleUrl: './button.scss'
})
export class Button {


  class = input<string>("");
  value = input<string>("")
  disabled = input<boolean>(false)
}
