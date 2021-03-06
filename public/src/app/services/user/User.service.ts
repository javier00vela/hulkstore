import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CrudService } from '../_general_/crud.service';
import { IResponse } from 'src/app/interfaces/response.interface';
import { Observable } from 'rxjs';
import { ICategory } from 'src/app/interfaces/ICategoria.interface';
import { IUser } from 'src/app/interfaces/IUsuario.interface';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/utils/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends CrudService {

  private controller = "user";

  constructor(protected http: HttpClient , private _router:Router) { 
    super(http);
  }

  

  public savePerson(user : Person){
    
  }

  public authPerson(user : IUser){
    console.log(user);
    
    this.post(`${this.controller}/auth` , user).subscribe((data)=>{
      AuthService.setSession(data)
      this._router.navigate(["/admin"])
    });
   
  }



}
