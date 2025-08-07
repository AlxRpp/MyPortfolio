import { Component, ElementRef, viewChild } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  git = viewChild.required<HTMLImageElement>('git');
  linkedIn = viewChild.required<HTMLImageElement>('linkedIn');
  mail = viewChild.required<HTMLImageElement>('mail');


  // rollingIn() {
  //   this.git().nativeElement.classList.remove('roll-out')
  //   this.git().nativeElement.classList.add('roll-in')
  // }

  // rollingOut() {
  //   this.git().nativeElement.classList.remove('roll-in')
  //   this.git().nativeElement.classList.add('roll-out')

  // }

  toggleAnimation(ref: HTMLImageElement, direction: 'in' | 'out') {
    // const id = ref.nativeElement;
    ref.classList.add(direction === 'in' ? 'roll-in' : 'roll-out');
    ref.classList.remove(direction === 'out' ? 'roll-in' : 'roll-out');

  }
}
