import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import * as cryptoJs from 'crypto-js';
import { map } from 'rxjs/operators';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class BranchesService extends BaseService{

  constructor(private http: HttpClient) {
    super();
  }

  getBranches(){
    return this.http.get<string[]>(`${this.baseURL}api/branches`);
  }

}
