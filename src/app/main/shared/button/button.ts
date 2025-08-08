import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-button',
  imports: [CommonModule, RouterLink],
  templateUrl: './button.html',
  styleUrl: './button.scss'
})
export class Button {


  class = input<string>("");
  value = input<string>("");
  route = input<string[]>();
  fragment = input<string>("");
  // actionType = input<'route' | 'fragment' | 'submit'>('route')
  disabled = input<boolean>(false);

}
