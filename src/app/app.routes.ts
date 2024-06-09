import {Routes} from '@angular/router';
import {RegisterComponent} from "./pages/register/register.component";
import {UserPageComponent} from "./pages/user-page/user-page.component";

export const routes: Routes = [
  {
    path: "auth",
    component: RegisterComponent,
  },
  {
    path: "user-page",
    component: UserPageComponent
  }, {
    path: "**",
    redirectTo: "auth"
  }
];
