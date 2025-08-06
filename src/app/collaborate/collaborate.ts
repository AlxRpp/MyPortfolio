import { Component, ElementRef, input, signal, viewChild } from '@angular/core';
import { Button } from "../shared/button/button";
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm, NgModel } from '@angular/forms';

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

  submitForm(ngForm: NgForm) {
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

  focusedInput(label: HTMLElement, id: NgModel) {
    label.classList.add('focus');

  }

  bluredInput(label: HTMLElement, id: NgModel) {
    label.classList.remove('focus')
    if (id.value.length < 3) {
      // console.log('jooooo');
    }
  }
}