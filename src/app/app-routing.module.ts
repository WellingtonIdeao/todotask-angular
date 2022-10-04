import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'categories', 
    loadChildren: () => import('./categories/categories.module').then(m => m.CategoriesModule)
  },
  { path: '', pathMatch: 'full', redirectTo: '/categories'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
