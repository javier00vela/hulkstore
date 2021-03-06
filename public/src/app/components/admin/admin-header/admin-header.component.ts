import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/utils/auth/auth.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent implements OnInit {
  public idRole : number = 2;
  constructor(private _auth:AuthService , private _router: Router) { }

  ngOnInit(): void {
  }

  role(){

  }

  logOut(){
    this._auth.logout(()=>{
      this._router.navigate(["login"]);
    })
  }

}
