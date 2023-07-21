import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.page.html',
  styleUrls: ['./main-screen.page.scss'],
})
export class MainScreenPage implements OnInit {
  selectedBranch: string;

  constructor(private router: Router,) { }

  ngOnInit() {
    this.selectedBranch = this.router.getCurrentNavigation()!.extras.state?.['selectedBranch'] || 'No branch selected';
  }

}
