import {Inject, Injectable} from '@angular/core';
import {DOCUMENT} from "@angular/common";

declare global {
  interface Window {
    Telegram: any;
  }
}

@Injectable({
  providedIn: 'root'
})
export class TelegramService {
  private window: Window | null = null;
  public tg: any;

  constructor(@Inject(DOCUMENT) private _document: Document) {
    this.window = this._document.defaultView;
    this.tg = this.window?.Telegram.WebApp;
  }


}
