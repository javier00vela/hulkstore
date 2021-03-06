import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IResponse } from 'src/app/interfaces/response.interface';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CrudService } from '../_general_/crud.service';
import { IProduct } from 'src/app/interfaces/IProduct.interface';
import { ICart } from 'src/app/interfaces/ICart.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService extends CrudService {

  constructor(protected http: HttpClient) { 
    super(http);
  }

  public addProduct(Product:IProduct , authId){
    
    return true;
  }

  public getAllListCart() : Observable<ICart[]>{
    return new Observable<ICart[]>((obs)=>{
       obs.next([
        { id : 1 , product : { id : 1 , name : "cuaderno prueba" , stock : 10 ,person_id : 5 , category_id : 1 ,  description : "es una prueba gdfgdf fdgffgdfgfdgfdgfddfgfdgdffgdgfdfgdffdgdfgffgdfgfd" , photo : "https://www.grupoerik.com/110377-large_default/cuaderno-tapa-polipropileno-a4-4x4-marvel-comics-avengers.jpg" } , person : {id : 1 , name : "aaa" , lastname:"12345" , user_id : 1 , profile_id : 1 } , amount : 5 },
      ]);
      obs.complete();
    });
  }


}
