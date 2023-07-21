import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import * as cryptoJs from 'crypto-js';
import { map } from 'rxjs/operators';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService {

  constructor(
    private http: HttpClient,
    private storage: StorageService
    ) {
    super();
  }

  login(params: any) {
    return this.http.post<any>(`${this.baseURL}login`, params)
    .pipe(map(
      response => {
        if (response?.success) {
          this.storage.set(this.USER_INFO, response.message);
          return response.message
        } else {
          throw new Error(response.message)
        }
      }
    ));
  }

  register(params: any) {
    return this.http.post<any>(`${this.baseURL}register`, params)
    .pipe(map(
      response => {
        if (response?.success) {
          return response.message
        } else {
          throw new Error(response.message)
        }
      }
    ));
  }

  async getLogin() {
    const user = await this.storage.get(this.USER_INFO);
    if (!user) return false
    return user;
  }

}
