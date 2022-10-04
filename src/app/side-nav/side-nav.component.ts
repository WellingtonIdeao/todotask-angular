import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { CategoryService } from '../categories/category.service';
import { Category } from '../interfaces/category';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  categories$!: Observable<Category[]>;
  
  list: any[] = [
    { id: '1', name: 'text1'},
    { id: '2', name: 'text2'},
    { id: '3', name: 'text3'},
  ];

  @Input() sideNavStatus: boolean = false;

  constructor(
    private service: CategoryService,
  ) { }

  ngOnInit(): void {
    this.categories$ = this.service.list();
  }
}
