import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.page.html',
  styleUrls: ['./main-screen.page.scss'],
})
export class MainScreenPage implements OnInit {
  buttons = [
    { label: 'Button 1', isSelected: false },
    { label: 'Button 2', isSelected: false},
    { label: 'Button 3', isSelected: false},
    { label: 'Button 1', isSelected: false },
    { label: 'Button 2', isSelected: false },
    { label: 'Button 3', isSelected: false },
    { label: 'Button 1', isSelected: false },
    { label: 'Button 2', isSelected: false },
    { label: 'Button 3', isSelected: false },
    { label: 'Button 1', isSelected: false },
    { label: 'Button 2', isSelected: false },
    { label: 'Button 3', isSelected: false },
  ];

  selectedButtonIndex: number | null = null;

  selectButton(index: number) {
    if (this.selectedButtonIndex === index) {
      this.selectedButtonIndex = null; // Dehighlight the button if it's already selected
    } else {
      this.selectedButtonIndex = index; // Highlight the button if it's not selected
    }
  }

  constructor() { }

  ngOnInit() {
  }

}