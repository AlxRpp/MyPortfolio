import { Component, ElementRef, inject, signal, viewChild } from '@angular/core';
import { Button } from "../../shared/button/button";
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { Footer } from "../../shared/footer/footer";
import { Router } from '@angular/router';
import { TranslateDirective, TranslatePipe, TranslateService } from '@ngx-translate/core';
import { Language } from '../../shared/service/language';
import { HttpClient } from '@angular/common/http';

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
  http = inject(HttpClient)
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


  post = {
    endPoint: 'https://alexander-ruppel.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };


  submitForm(ngForm: NgForm, contactName: NgModel, contactMail: NgModel, contactMessage: NgModel, textArea: HTMLTextAreaElement) {
    if (ngForm.valid && ngForm.submitted && this.checked()) {
      this.http.post(this.post.endPoint, this.post.body(this.formData))
        .subscribe({
          next: (response) => {

            ngForm.resetForm();
            this.getNotification();

          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
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