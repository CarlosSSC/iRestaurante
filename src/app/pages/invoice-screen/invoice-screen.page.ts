import { Component } from '@angular/core';

@Component({
  selector: 'app-invoice-screen',
  templateUrl: 'invoice-screen.page.html',
  styleUrls: ['invoice-screen.page.scss'],
})
export class InvoiceScreenPage {
  tableRows: { 
    quantity: number; 
    description: string; 
    price: number;
    rfc_receiver: string;
    rfc_issuer: string;
  }[] = [];
  
  currentDate: string; // Add this variable to store the current date and time
  invoiceNumber: string = '';
  issuer: string = '';
  receiver: string = '';
  rfc_receiver: string = '';
  rfc_issuer: string = '';
  cfdiUse: string = '';
  taxRegimen: string = '';
  name: string = '';
  address: string = '';

  constructor() {
    // Call the updateCurrentDate function to set the initial value
    this.updateCurrentDate();

    // Update the currentDate every second using setInterval
    setInterval(() => {
      this.updateCurrentDate();
    }, 1000);
    
    // Initialize with an empty row
    this.tableRows.push({ 
      quantity: 0, 
      description: '', 
      price: 0, 
      rfc_receiver: '',
      rfc_issuer: ''
    });
  }

  addItem() {
    this.tableRows.push({ 
      quantity: 0, 
      description: '', 
      price: 0, 
      rfc_receiver: this.rfc_receiver,
      rfc_issuer: this.rfc_issuer
    });
  }

  submitTable() {
    // Display table content along with form data in the console
    console.log({
      currentDate: this.currentDate,
      invoiceNumber: this.invoiceNumber,
      issuer: this.issuer,
      receiver: this.receiver,
      rfc_receiver: this.rfc_receiver,
      rfc_issuer: this.rfc_issuer,
      cfdiUse: this.cfdiUse,
      taxRegimen: this.taxRegimen,
      name: this.name,
      address: this.address,
      concepts: this.tableRows
    });
  }

  private updateCurrentDate() {
    this.currentDate = new Date().toISOString(); // Update the currentDate with the current date and time
  }
}
