import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CrudService } from '../_general_/crud.service';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/interfaces/IProduct.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends CrudService {

  constructor(protected http: HttpClient) { 
    super(http);
  }

  
  
  public manageRequestProduct(Product : IProduct , isUpdated : boolean) : Boolean{
    if(isUpdated){

      return true;
    }

    return true
  }


  public getProductById(idProduct : number) : Observable<IProduct>{
    return new Observable<IProduct>((obs)=>{
       obs.next(
        { id : 1 , name : "cuaderno prueba" , stock : 10 ,person_id : 5 , category_id : 1 ,  description : "es una prueba gdfgdf fdgffgdfgfdgfdgfddfgfdgdffgdgfdfgdffdgdfgffgdfgfd" , photo : "https://www.grupoerik.com/110377-large_default/cuaderno-tapa-polipropileno-a4-4x4-marvel-comics-avengers.jpg" },
      );
      obs.complete();
    });
  }

  public getProductsByIdCategory(idCategory : number) : Observable<IProduct[]>{
    return new Observable<IProduct[]>((obs)=>{
       obs.next([
        { id : 1 , name : "cuaderno prueba" , stock : 10 ,person_id : 5 , category_id : 1 ,  description : "es una prueba gdfgdf fdgffgdfgfdgfdgfddfgfdgdffgdgfdfgdffdgdfgffgdfgfd" , photo : "https://www.grupoerik.com/110377-large_default/cuaderno-tapa-polipropileno-a4-4x4-marvel-comics-avengers.jpg" },
      ]);
      obs.complete();
    });
  }


}
