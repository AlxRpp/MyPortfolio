import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'Alexander Ruppel';
  // private translate = inject(TranslateService);

  // constructor() {
  //   this.translate.addLangs(['de', 'en']);
  // }

}