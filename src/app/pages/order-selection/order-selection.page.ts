import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-order-selection',
  templateUrl: './order-selection.page.html',
  styleUrls: ['./order-selection.page.scss'],
})
export class OrderSelectionPage implements OnInit {

  barcodedata: any;
  scannResult: string;
  constructor(private barcodeScanner: BarcodeScanner) {}

  ngOnInit() {
  }

  scan() {
    this.barcodedata = null;
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.barcodedata = barcodeData;
      this.scannResult = barcodeData.text;
    }).catch(err => {
      console.log('Error', err);
    });
  }

}


