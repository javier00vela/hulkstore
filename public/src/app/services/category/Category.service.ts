import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CrudService } from '../_general_/crud.service';
import { ICategory } from 'src/app/interfaces/ICategoria.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends CrudService {

  constructor(protected http: HttpClient) { 
    super(http);
  }

  public getAllCategory() : Observable<ICategory[]>{
    return new Observable<ICategory[]>((obs)=>{
       obs.next([
        { id : 1 , name : "cuadernos" , photo : "https://http2.mlstatic.com/D_NQ_NP_630131-MCO44522012476_012021-V.jpg" },
        { id : 2 , name : "ropa" , photo : "https://cdnx.jumpseller.com/baby-monster/image/5463531/resize/640/500?1556025190" },
        { id : 3 , name : "vasos" , photo : "https://cdn.shopify.com/s/files/1/0122/4969/4272/collections/vasos-marvel-avengers_1200x1200.jpg?v=1566144257" }
      ]);
      obs.complete();
    });
  }



}
