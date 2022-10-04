import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Category } from '../interfaces/category';
import { CrudService } from '../shared/crud-service';


@Injectable({
  providedIn: 'root'
})
// padrão repository
export class CategoryService extends CrudService<Category> {

  constructor(protected override http: HttpClient) {
    super(http,`${environment.API}/category`);
  }
}
