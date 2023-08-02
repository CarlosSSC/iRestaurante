import { Component } from '@angular/core';
import { InvoiceService } from 'src/app/services/invoice.service';

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

  constructor(
    private invoiceService: InvoiceService
  ) {
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
    const params = {
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
    };
    console.log(params);
    this.invoiceService.generateXML(params).subscribe({
      next: (result) => {
        console.log(result);
        this.downloadXML(result.xml)        
      }
    })
  }

  private updateCurrentDate() {
    this.currentDate = new Date().toISOString(); // Update the currentDate with the current date and time
  }

  downloadXML(xml: any) {

    var filename = `invoice_${this.invoiceNumber}.xml`;
    var doc = document.createElement('a');
    var blob = new Blob([xml], {type: 'text/plain'});
  
    doc.setAttribute('href', window.URL.createObjectURL(blob));
    doc.setAttribute('download', filename);
  
    doc.dataset['downloadurl'] = ['text/plain', doc.download, doc.href].join(':');
    doc.draggable = true; 
    doc.classList.add('dragout');
  
    doc.click();
    }
}
