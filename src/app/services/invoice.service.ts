import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService extends BaseService {

  constructor(private http: HttpClient) {
    super();
  }

  generateXML(params: any) {
    return this.http.post<any>(`${this.baseURL}invoices/generate_xml`, params)
    .pipe(map(
      response => {
        if (response?.success) {
          return response.message
        } else {
          throw new Error(response.error)
        }
      }
    ));
  }

  generatePDF(params: any) {
    return this.http.post<any>(`${this.baseURL}invoices/generate_pdf`, params)
    .pipe(map(
      response => {
        if (response?.success) {
          return response.message
        } else {
          throw new Error(response.error)
        }
      }
    ));
  }
}
