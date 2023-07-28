import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService extends BaseService {

  constructor(private http: HttpClient) {
    super();
  }

  getAllProducts() {
    return this.http.get<any>(`${this.baseURL}products`)
      .pipe(map(response => response.data));
  }

  getProductById(productId: number) {
    return this.http.get<any>(`${this.baseURL}products/${productId}`)
      .pipe(map(response => response.data));
  }
}
