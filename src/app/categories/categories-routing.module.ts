import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoryComponent } from './category/category.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { CategoryResolverGuard } from './guards/category-resolver.guard';

const routes: Routes = [
  {
    path: '', component: CategoryComponent,
    children: [
      { path: ':id', component: CategoryDetailComponent} ,
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
