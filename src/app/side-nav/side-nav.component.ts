import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  list: any[] = [
    { id: '1', name: 'text1'},
    { id: '2', name: 'text2'},
    { id: '3', name: 'text3'},
  ];

  @Input() sideNavStatus: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
