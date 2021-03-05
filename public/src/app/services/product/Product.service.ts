import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CrudService } from '../_general_/crud.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends CrudService {

  constructor(protected http: HttpClient) { 
    super(http);
  }




}
