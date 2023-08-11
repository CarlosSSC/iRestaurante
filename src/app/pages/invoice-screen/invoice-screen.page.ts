import { Component, OnInit } from '@angular/core';
import { InvoiceService } from 'src/app/services/invoice.service';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-invoice-screen',
  templateUrl: 'invoice-screen.page.html',
  styleUrls: ['invoice-screen.page.scss'],
})
export class InvoiceScreenPage implements OnInit {
  
  currentDate: string; // Add this variable to store the current date and time
  cerFile: any;
  keyFile: any;

  form: any;

  constructor(
    private invoiceService: InvoiceService,
    private formBuilder: FormBuilder,
    private modalController: ModalController // Add ModalController to the constructor
  ) {
    // // Call the updateCurrentDate function to set the initial value
    // this.updateCurrentDate();

    // Update the currentDate every second using setInterval
    /*setInterval(() => {
      this.updateCurrentDate();
    }, 1000);*/
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      currentDate: ['', Validators.required],
      invoiceNumber: ['', [Validators.required]],
      issuer: ['', [Validators.required]],
      receiver: ['', [Validators.required]],
      rfcReceiver: ['', [Validators.required]],
      rfcIssuer: ['', [Validators.required]],
      cfdiUse: ['', [Validators.required]],
      taxRegimen: ['', [Validators.required]],
      name: ['', []],
      address: ['', []],
      concepts: this.formBuilder.array([]),
      cerFile: [],
      keyFile: []
    })
  }

  // Convenience getter for the FormArray
  get concepts() {
    return this.form.controls.concepts as FormArray;
  }

  // Add an object to the FormArray
  addObjectToFormArray() {
    const newObjectFormGroup = this.formBuilder.group({
      quantity: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required]
    });
    this.concepts.push(newObjectFormGroup);
    console.log(this.form.value)
    const x = this.form.value.currentDate.split('T')[0]
    console.log(new Date(x).toISOString());
  }

  generateXML() {
    if (this.form.valid && this.cerFile && this.keyFile) {
      
      const formData = new FormData();
      formData.append("invoiceNumber", this.form.value['invoiceNumber']);
      formData.append("issuer", this.form.value['issuer']);
      formData.append("receiver", this.form.value['receiver']);
      formData.append("rfcReceiver", this.form.value['rfcReceiver']);
      formData.append("rfcIssuer", this.form.value['rfcIssuer']);
      formData.append("cfdiUse", this.form.value['cfdiUse']);
      formData.append("taxRegimen", this.form.value['taxRegimen']);
      formData.append("name", this.form.value['name']);
      formData.append("adress", this.form.value['adress']);
      formData.append("concepts", JSON.stringify({ concepts: this.form.value['concepts']}));
      formData.append("cerFile", this.cerFile);
      formData.append("keyFile", this.keyFile);
      const dateInput = this.form.value.currentDate.split('T')[0]
      const date = new Date(dateInput).toISOString();
      formData.append("currentDate", date);
  
      this.invoiceService.generateXML(formData).subscribe(response => {
        this.downloadXML(response);
      })
    } else {
      console.log('Faltan campos del formulario',this.form.controls);
    }

  }

  /*private updateCurrentDate() {
    this.currentDate = new Date().toISOString(); // Update the currentDate with the current date and time
  }*/

  deleteItem(index: number) {
    this.form.value.concepts.splice(index, 1);
  }

  downloadXML(xml: any) {

    var filename = `invoice_${this.form.value.invoiceNumber}.xml`;
    var doc = document.createElement('a');
    var blob = new Blob([xml], { type: 'text/plain' });

    doc.setAttribute('href', window.URL.createObjectURL(blob));
    doc.setAttribute('download', filename);

    doc.dataset['downloadurl'] = ['text/plain', doc.download, doc.href].join(
      ':'
    );
    doc.draggable = true;
    doc.classList.add('dragout');

    doc.click();
  }

  selectCerFile(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.cerFile = file;
    }
  }

  selectKeyFile(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.keyFile = file;
    }
  }

  generatePDF() {
    if (this.form.valid) {
      const dateInput = this.form.value.currentDate.split('T')[0]
      const date = new Date(dateInput).toISOString();
      this.form.value.currentDate = date;
      this.invoiceService.generatePDF(this.form.value).subscribe(response => {
        this.saveAndOpenPdf(response.pdf)
      })
    }
    else {
      console.log('Faltan campos del formulario',this.form.controls);
    }
  }

  saveAndOpenPdf(pdf: string) {
    const fileBob = this.convertBase64ToBlob(pdf, 'data:application/pdf;base64')
    var filename = `invoice_${this.form.value.invoiceNumber}.pdf`;
    var doc = document.createElement('a');
    //var blob = new Blob([xml], {type: 'text/plain'});
  
    doc.setAttribute('href', window.URL.createObjectURL(fileBob));
    doc.setAttribute('download', filename);
  
    doc.dataset['downloadurl'] = ['text/plain', doc.download, doc.href].join(':');
    doc.draggable = true; 
    doc.classList.add('dragout');
  
    doc.click();
  }

  convertBase64ToBlob(b64Data:any, contentType:any): Blob {
    contentType = contentType || '';
    const sliceSize = 512;
    b64Data = b64Data.replace(/^[^,]+,/, '');
    b64Data = b64Data.replace(/\s/g, '');
    const byteCharacters = window.atob(b64Data);
    const byteArrays = [];
    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
         const slice = byteCharacters.slice(offset, offset + sliceSize);
         const byteNumbers = new Array(slice.length);
         for (let i = 0; i < slice.length; i++) {
             byteNumbers[i] = slice.charCodeAt(i);
         }
         const byteArray = new Uint8Array(byteNumbers);
         byteArrays.push(byteArray);
    }
   return new Blob(byteArrays, {type: contentType});
}

}
