
import { Injectable } from "@angular/core";
import * as moment from "moment";

@Injectable({
  providedIn : 'root'
})
export class AuthService {

    public static setSession(authResult) {
        const expiresAt = moment().add(authResult.expiresIn,'second');
        localStorage.setItem('token', authResult.token);
        localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
    }    
    
    public isAuthed(){
        const token = localStorage.getItem('token');
       return ( token !== null && token !== undefined && token !== '' ? true : false );
    }

    public infoUser(){
        return {id : 1}
    }

    public  logout(callaback: ()=> void) {
        localStorage.removeItem("token");
        localStorage.removeItem("expires_at");
        callaback();
    }

    public isLoggedIn() {
        return moment().isBefore(this.getExpiration());
    }

    public isLoggedOut() {
        return !this.isLoggedIn();
    }

    public getExpiration() {
        const expiration:any = localStorage.getItem("expires_at");
        const expiresAt = JSON.parse(expiration);
        return moment(expiresAt);
    }   
    
    public getRole() : number{
        return 2;
    }
}
          
          