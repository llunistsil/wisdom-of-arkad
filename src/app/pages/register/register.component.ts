import { Component } from '@angular/core';
import {UserFormComponent} from "../../shared/components/user-form/user-form.component";
import {TgAuthService} from "../../core/services/tg-auth.service";
import {ActivatedRoute} from "@angular/router";
import {User} from "../../core/models/user.modul";

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

  constructor(private tgAuthService:TgAuthService,private route:ActivatedRoute) {
    this.user = this.tgAuthService.getUserData(this.route);
  }

}
