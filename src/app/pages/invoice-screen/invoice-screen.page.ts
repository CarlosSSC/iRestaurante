import { Component, OnInit } from '@angular/core';
import { InvoiceService } from 'src/app/services/invoice.service';
import { FormBuilder, Validators, FormArray } from '@angular/forms';

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
    private formBuilder: FormBuilder
  ) {
    // Call the updateCurrentDate function to set the initial value
    this.updateCurrentDate();

    // Update the currentDate every second using setInterval
    setInterval(() => {
      this.updateCurrentDate();
    }, 1000);
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      currentDate: [''],
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
      cerFile: ['', [Validators.required]],
      keyFile: [Validators.required]
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
  }

  submit() {

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
    formData.append("currentDate", this.currentDate);

    this.invoiceService.generateXML(formData).subscribe(response => {
      this.downloadXML(response.xml);
    })
    // Display table content along with form data in the console
  }

  private updateCurrentDate() {
    this.currentDate = new Date().toISOString(); // Update the currentDate with the current date and time
  }

  downloadXML(xml: any) {

    var filename = `invoice_${this.form.value.invoiceNumber}.xml`;
    var doc = document.createElement('a');
    var blob = new Blob([xml], {type: 'text/plain'});
  
    doc.setAttribute('href', window.URL.createObjectURL(blob));
    doc.setAttribute('download', filename);
  
    doc.dataset['downloadurl'] = ['text/plain', doc.download, doc.href].join(':');
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
}
