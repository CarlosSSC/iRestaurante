import { BranchesService } from 'src/app/services/branches.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.page.html',
  styleUrls: ['./main-screen.page.scss'],
})
export class MainScreenPage implements OnInit {
  selectedBranch: string;

  constructor(private router: Router) { 
    const navigation = this.router.getCurrentNavigation()!;
    if (navigation.extras.state) {
      const dataString = navigation.extras.state['data'];
      const data = JSON.parse(dataString);
      this.selectedBranch = data.selectedBranch;
    }
  }

  ngOnInit() {
  }

}
