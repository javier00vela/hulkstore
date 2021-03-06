import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IResponse } from 'src/app/interfaces/response.interface';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CrudService {

  protected basePath = environment.router.back; 

  constructor(protected http: HttpClient) { }

  protected get(route: string): Observable<IResponse<any>> {
    return this.http.get(`${this.basePath}/${route}`).pipe(map((data: any) => data));
  }

  protected getById(route: string, id: number): Observable<IResponse<any>> {
    return this.http.get(`${this.basePath}/${route}/${id}`).pipe(map((data) => data as IResponse<any>));
  }

  protected post(route: string, data: JSON | Object | []): Observable<IResponse<any>> {
    return this.http.post(`${this.basePath}/${route}`, data).pipe(map((data) => data as IResponse<any>));
  }

  protected put(route: string, data: JSON | Object | []): Observable<IResponse<any>> {
    return this.http.put(`${this.basePath}/${route}`, data).pipe(map((data: any) => data));
  }

  protected putById(route: string, id: number, data: JSON | Object | []): Observable<IResponse<any>> {
    return this.http.put(`${this.basePath}/${route}/${id}`, data).pipe(map((data) => data as IResponse<any>));
  }

  protected deleteById(route: string, id: number): Observable<IResponse<any>> {
    return this.http.delete(`${this.basePath}/${route}/${id}`).pipe(map((data) => data as IResponse<any>));
  }

}
