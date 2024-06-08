import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TelegramService} from "./services/tg-service/telegram.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(private telegram:TelegramService) {
    this.telegram.ready();
    this.telegram.tg.expand();
  }
  close():void{
    this.telegram.close();
  }

  changeMain():void{
    this.telegram.MainButton.enable();
  }
}
