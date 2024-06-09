import { Component } from '@angular/core';
import {UserFormComponent} from "../../shared/components/user-form/user-form.component";
import {User} from "../../core/models/user.modul";
import {TelegramService} from "../../core/services/telegram.service";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    UserFormComponent
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  public user:User | null = null

  constructor(private tgService:TelegramService) {
    this.user = this.tgService.getUserData();
  }

}
