import { HttpClient } from '@angular/common/http'
import { Observable, take, tap } from 'rxjs';

// padrão repository
export class CrudService <T> {

  constructor(protected  http: HttpClient, private API_URL: string) {}

  list(): Observable <T[]> {
     return this.http.get<T[]>(this.API_URL)
      .pipe(
        tap(console.log)
      );
  }
  
  listById(id: number): Observable<T> {
    return this.http.get<T>(`${this.API_URL}/${id}`).pipe(take(1));
  }
}
