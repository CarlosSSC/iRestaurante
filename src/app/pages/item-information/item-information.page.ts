import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-information',
  templateUrl: './item-information.page.html',
  styleUrls: ['./item-information.page.scss'],
})
export class ItemInformationPage implements OnInit {

  counter: number = 1;

  increaseCounter() {
    this.counter++;
  }

  decreaseCounter() {
    if (this.counter > 1) {
      this.counter--;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
