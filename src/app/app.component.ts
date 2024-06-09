import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TelegramService} from "./core/services/telegram.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(private telegram:TelegramService) {
    this.telegram.tg.ready();
    this.telegram.tg.expand();
  }
  close():void{
    this.telegram.tg.close();
  }

  changeMain():void{
    this.telegram.tg.MainButton.enable();
  }
}
