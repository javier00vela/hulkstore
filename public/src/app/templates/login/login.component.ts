import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { IPerson } from 'src/app/interfaces/IPerson.interface';
import { IUser } from 'src/app/interfaces/IUsuario.interface';
import { UserService } from 'src/app/services/user/User.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public usuario:IUser = <IUser>{}; 
  public person:IPerson = <IPerson>{}; 
  // public listaCiudades: Observable<ICiudad> = new Observable<ICiudad>(); 
  // public listaSedes: Observable<ISede> = new Observable<ISede>(); 
  constructor(private _usuarioService:UserService ) { }


  
  public loginForm : FormGroup = new FormGroup({
    usuario: new FormControl('usuario', [Validators.minLength(5) ,Validators.required] ),
    contrasena: new FormControl('contrasena', [Validators.required] )
  });

  public registroForm : FormGroup = new FormGroup({
    nombres: new FormControl('nombres', [Validators.minLength(4) ,Validators.required] ),
    apellidos: new FormControl('apellidos', [Validators.minLength(4) ,Validators.required] ),
    id_perfil: new FormControl('id_perfil' , [Validators.required] ),
    usuario: new FormControl('usuario', [Validators.minLength(5) ,Validators.required] ),
    contrasena: new FormControl('contrasena', [Validators.required] )
  });

  enviarLogin(datos:FormGroup){
    if(datos.valid){
      this.usuario = datos.value;
      this._usuarioService.authPerson(this.usuario);
    }
  }

  enviarRegistro(datos:FormGroup){
    if(datos.valid){

      this.usuario = datos.value;
      this._usuarioService.savePerson(this.person);
    }
  }

  ngOnInit(): void {
    this.registroForm.reset();
    this.loginForm.reset();
  }

}