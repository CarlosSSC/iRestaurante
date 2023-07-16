import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-selection',
  templateUrl: './order-selection.page.html',
  styleUrls: ['./order-selection.page.scss'],
})
export class OrderSelectionPage implements OnInit {

  barcodedata: any;
  scannResult: string;
  constructor(private barcodeScanner: BarcodeScanner, private router: Router) {}

  ngOnInit() {
  }

  scan() {
    this.barcodedata = null;
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.barcodedata = barcodeData;
      this.scannResult = barcodeData.text;
      if(this.scannResult.includes("iR-ACCESS_GRANTED")){
        this.router.navigate(['/main-screen']);
      }
    }).catch(err => {
      console.log('Error', err);
    });
  }

}


