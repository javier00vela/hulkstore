import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IResponse } from 'src/app/interfaces/response.interface';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CrudService } from '../_general_/crud.service';

@Injectable({
  providedIn: 'root'
})
export class PersonService extends CrudService {

  constructor(protected http: HttpClient) { 
    super(http);
  }




}
