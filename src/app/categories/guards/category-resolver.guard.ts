import { CategoryService } from './../category.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Category } from '../../interfaces/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryResolverGuard implements Resolve<Category> {

  constructor( private service: CategoryService){}
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    if (route.params && route.params['id']){
      return this.service.listById(route.params['id']);
    }
    return of(<Category>{});
  }
  
  
}
