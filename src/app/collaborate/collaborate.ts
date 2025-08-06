import { Component, ElementRef, input, signal, viewChild } from '@angular/core';
import { Button } from "../shared/button/button";
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-collaborate',
  imports: [Button, CommonModule, FormsModule],
  templateUrl: './collaborate.html',
  styleUrl: './collaborate.scss'
})
export class Collaborate {

  checked = signal<boolean>(false);
  formData = {
    name: "",
    mail: "",
    message: ""
  }

  toggleCheckbox() {
    this.checked.update(value => !value);
  }

  test(ngForm: NgForm) {
    if (ngForm.valid && ngForm.submitted) {
      console.log(this.formData);
      this.formData.name = "";
      this.formData.mail = "";
      this.formData.message = "";
    } else {
      console.log('form not valid');

    }
  }


  adjustHeight(textarea: HTMLTextAreaElement) {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px'
  }

  focusedInput(id: HTMLElement) {
    id.classList.add('focus');
  }

  bluredInput(id: HTMLElement) {
    id.classList.remove('focus')
  }
}
