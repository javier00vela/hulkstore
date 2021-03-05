import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public usuario:any = {
    identificacion : 123,
    contrasena : ''
  }; 
  // public listaCiudades: Observable<ICiudad> = new Observable<ICiudad>(); 
  // public listaSedes: Observable<ISede> = new Observable<ISede>(); 
  constructor( ) { }


  
  public loginForm : FormGroup = new FormGroup({
    identificacion: new FormControl('identificacion', [Validators.minLength(1) ,Validators.required] ),
    contrasena: new FormControl('contrasena', [Validators.required] )
  });

  public registroForm : FormGroup = new FormGroup({
    nombres: new FormControl('nombres', [Validators.minLength(1) ,Validators.required] ),
    id_perfil: new FormControl('id_perfil' ),
    apellidos: new FormControl('nombres', [Validators.minLength(1) ,Validators.required] ),
    id_ciudad: new FormControl('id_ciudad', [Validators.required] ),
    id_sede: new FormControl('id_sede', [Validators.required] ),
    identificacion: new FormControl('identificacion', [Validators.minLength(1) ,Validators.required] ),
    contrasena: new FormControl('contrasena', [Validators.required] )
  });

  enviarLogin(datos:FormGroup){
    if(datos.valid){
      // this._usuarioService.authPerson(datos.value);
    }
  }

  enviarRegistro(datos:FormGroup){
    if(datos.valid){
      // this._usuarioRestService.sendUsuarios(datos.value).subscribe(()=>{
      //   alert("guardado");
      //   datos.reset();
      // });
    }
  }

  ngOnInit(): void {
    this.registroForm.reset();
    this.loginForm.reset();
  }

}