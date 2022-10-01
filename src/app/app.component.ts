import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sideNavStatus: boolean = false;

  constructor() {
  }
  setSideNavStatus(status: boolean){
    this.sideNavStatus = status;
  }

}
