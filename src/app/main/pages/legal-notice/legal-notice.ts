import { Component, inject } from '@angular/core';
import { Header } from '../../shared/header/header';
import { Footer } from '../../shared/footer/footer';
import { TranslateDirective, TranslatePipe, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-legal-notice',
  imports: [Header, Footer, TranslatePipe, TranslateDirective, CommonModule],
  templateUrl: './legal-notice.html',
  styleUrl: './legal-notice.scss'
})
export class LegalNotice {
  private translate = inject(TranslateService)

}
