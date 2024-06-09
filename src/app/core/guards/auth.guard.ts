import {CanActivateFn, Router} from '@angular/router';
import {inject, Injectable} from "@angular/core";
import {TgAuthService} from "../services/tg-auth.service";
import {map, Observable} from "rxjs";


export const authGuard: CanActivateFn = (route, state) => {
  const queryParams = route.queryParams;
  const tgAuthService = inject(TgAuthService);
  const router = inject(Router);
  if(queryParams['tgWebAppData']){
    const userData = JSON.parse(queryParams['tgWebAppData']);
    return tgAuthService.verifyAuthData(userData).pipe(
      map(response => {
        if (response.isRegistered) {
          localStorage.setItem('isRegistered', 'true');
          return true;
        } else {
          router.navigate(['/'], { queryParams: { tgWebAppData: queryParams['tgWebAppData'] } });
          return false;
        }
      })
    )
  } else {
    router.navigate(['/user-page']);
    return new Observable<boolean>(observer => observer.next(false));
  }
};
