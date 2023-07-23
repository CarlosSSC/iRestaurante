import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { BranchesService } from 'src/app/services/branches.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-selection',
  templateUrl: './order-selection.page.html',
  styleUrls: ['./order-selection.page.scss'],
})
export class OrderSelectionPage implements OnInit {
  branches: string[] = [];
  barcodedata: any;
  scannResult: string;
  selectedBranch: string;
  constructor(private barcodeScanner: BarcodeScanner, private router: Router, 
              private http: HttpClient, private branchesService: BranchesService) {}

  ngOnInit() {
    this.fetchBranches();
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

  async fetchBranches() {
    try {//Fetching Branches but not showing up in frontend
      const data = await this.branchesService.getBranches().toPromise();
      this.branches = data!;
      console.log('Branches:', this.branches);
    } catch (error) {
      console.error('Error fetching branches:', error);
    }
  }

  onSelectOption(option: string) {
    this.selectedBranch = option;
  }

  onSubmit() {
    console.log('Selected Branch:', this.selectedBranch);
    const data = { selectedBranch: this.selectedBranch };
    const dataString = JSON.stringify(data);
    this.router.navigate(['/main-screen'], { state: { data: dataString } });
  }

}


