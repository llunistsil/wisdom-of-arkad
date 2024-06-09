import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {User} from "../models/user.modul";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TgAuthService {

  private serverAddr = environment.apiUrl;

  public userData:User | null = null;

  constructor(private _http: HttpClient) {}

  verifyAuthData(authData: any): Observable<any> {
    return this._http.post(`${this.serverAddr}/api/verify-telegram-auth`, authData);
  }

  checkRegistration(userId: string): Observable<any> {
    return this._http.get(`${this.serverAddr}/api/check-registration/${userId}`);
  }
  registerUser(userData: any): Observable<any> {
    return this._http.post('/api/register', userData);
  }
}
