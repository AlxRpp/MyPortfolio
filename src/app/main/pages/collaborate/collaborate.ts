import { Component, ElementRef, inject, signal, viewChild } from '@angular/core';
import { Button } from "../../shared/button/button";
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { Footer } from "../../shared/footer/footer";
import { Router } from '@angular/router';
import { TranslateDirective, TranslatePipe, TranslateService } from '@ngx-translate/core';
import { Language } from '../../shared/service/language';

@Component({
  selector: 'app-collaborate',
  imports: [Button, CommonModule, FormsModule, Footer, TranslateDirective, TranslatePipe],
  templateUrl: './collaborate.html',
  styleUrls: [
    './collaborate.scss',
    './collaborate-mediaQuerrys.scss'
  ]
})


export class Collaborate {
  private translate = { TranslateService };
  private language = inject(Language);
  public isGerman = this.language.isGerman;
  checked = signal<boolean>(false);
  clickedOnce = signal<boolean>(false);
  submittedOnce = signal<boolean>(false);
  notification = viewChild.required<ElementRef>('notification')
  formData = {
    name: "",
    mail: "",
    message: ""
  }

  constructor(private router: Router) { }


  toggleCheckbox() {
    this.checked.update(value => !value);
    this.clickedOnce.set(true);
  }

  navigateToPrivacy() {
    this.router.navigateByUrl('privacy-policy');
  }



  submitForm(ngForm: NgForm, contactName: NgModel, contactMail: NgModel, contactMessage: NgModel, textArea: HTMLTextAreaElement) {
    if (ngForm.valid && ngForm.submitted && this.checked()) {
      // if (contactName.value.length >= 3 && contactMail.value.length > 3 && contactMessage.value.length > 3
      //   && this.checked() && ngForm.valid) {
      console.log(
        {
          name: this.formData.name,
          mail: this.formData.mail,
          message: this.formData.message
        });
      this.resetForm(ngForm, textArea)
      this.getNotification();

    }
    else {
      this.submittedOnce.set(true)
      console.log('form not valid');
    }
  }


  resetForm(ngForm: NgForm, textArea: HTMLTextAreaElement) {
    setTimeout(() => {
      this.submittedOnce.set(false)
      this.checked.set(false)
      this.clickedOnce.set(false)
      ngForm.reset();
      this.adjustHeight(textArea)
    }, 100)
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
  }

  getNotification() {
    this.notification().nativeElement.classList.add('opacity');
    setTimeout(() => {
      this.notification().nativeElement.classList.remove('opacity');
    }, 5000)
  }
}