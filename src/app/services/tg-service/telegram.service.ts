import {Inject, Injectable} from '@angular/core';
import {DOCUMENT} from "@angular/common";

interface TgButton {
  show(): void;
  hide(): void;
  setText(text: string): void;
  onClick(fn: Function): void;
  offClick(fn: Function): void;
  enable(): void;
  disable(): void;
}
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
  public tg:any;

  constructor(@Inject(DOCUMENT) private _document: Document) {
    this.window = this._document.defaultView;
    this.tg = this.window?.Telegram.WebApp;
  }
  get MainButton(): TgButton {
    return this.tg.MainButton;
  }

  get BackButton(): TgButton {
    return this.tg.BackButton;
  }

  sendData(data: object) {
    this.tg.sendData(JSON.stringify(data));
  }

  ready() {
    this.tg.ready();
  }
  close() {
    this.tg.close();
  }
}
