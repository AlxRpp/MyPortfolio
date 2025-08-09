import { Component, inject } from '@angular/core';
import { Button } from "../../shared/button/button";
import { CommonModule } from '@angular/common';
import { TranslateDirective, TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about-me',
  imports: [Button, CommonModule, TranslatePipe, TranslateDirective],
  templateUrl: './about-me.html',
  styleUrls: [
    './about-me.scss',
    './about-me-mediaQuerrys.scss'
  ]
})
export class AboutMe {
  private translate = inject(TranslateService)

}
