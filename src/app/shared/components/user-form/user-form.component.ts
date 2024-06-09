import {Component, Input} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import { Router} from "@angular/router";
import {TgAuthService} from "../../../core/services/tg-auth.service";
import {User} from "../../../core/models/user.modul";

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent{
  registerForm: FormGroup;
  userData: User | null = null;
  @Input() set user(user:User|null){
    this.userData = user;
    console.log(JSON.stringify(user))
    this.registerForm.patchValue({
      name:this.userData?.first_name,
      username:this.userData?.username
    })
  };

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private telegramAuthService: TgAuthService
  ) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      username: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const userData = { ...this.userData, ...this.registerForm.value };
      this.telegramAuthService.registerUser(userData).subscribe(() => {
        localStorage.setItem('isRegistered', 'true');
        this.router.navigate(['/user-page']);
      });
    }
  }

}
