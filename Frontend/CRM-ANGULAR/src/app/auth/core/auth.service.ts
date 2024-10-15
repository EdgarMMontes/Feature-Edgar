import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { of, tap } from 'rxjs';
import { Response } from '../../shared/core/Response.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environment/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private _http: HttpClient,
    public router: Router,
  ) { }

  public loginRequest( user: string, password: string ) {
    return this._http.get(`${environment.apiUrl}/auth?username=${user}&password=${password}`).pipe(
      tap( console.log )
    );
  }

  public verifyToken( token: string ){
    let response: Response<boolean> = {
      code: 200,
      message: "",
      data: true
      
    } 
    return of(response)
  }

  public saveUserInStorage( rememberMe: boolean, user: User ){
    if(rememberMe){
      localStorage.setItem( "user", JSON.stringify(user) );
    }
    sessionStorage.setItem( "user", JSON.stringify(user) );
  }

  public getUserInSessionStorage(){
    let user = sessionStorage.getItem( "user" );
    if(!user) return undefined;
    return JSON.parse(user) as User;
  }

  public getUserInLocaltorage(){
    let user = localStorage.getItem( "user" );
    if(!user) return undefined;
    return JSON.parse(user) as User;
  }

  public removeUserInStorage(){
    sessionStorage.removeItem( "user" );
    localStorage.removeItem( "user" );
  }
}
