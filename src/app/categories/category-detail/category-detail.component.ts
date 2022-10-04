import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, Subscription, switchMap, tap } from 'rxjs';
import { Category } from 'src/app/interfaces/category';

import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss']
})
export class CategoryDetailComponent implements OnInit {
  category!: Category;
  
  constructor(
    private service: CategoryService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe({
    //     next: (params: any) =>{
    //       const category$ = this.service.listById(params['id']);
    //       category$.pipe( tap(console.log)).subscribe();
    //     }
    //   }
    // );
    this.activatedRoute.params
    .pipe(
      map((params: any)=> params['id']),
      switchMap((id: number)=> this.service.listById(id))
    ).subscribe((category: Category) => this.category = category) 
  }
}
