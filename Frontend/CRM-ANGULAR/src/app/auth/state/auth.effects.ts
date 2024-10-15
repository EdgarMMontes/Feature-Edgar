import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as AuthActions from './auth.actions';
import { AuthService } from '../core/auth.service';
import { catchError, exhaustMap, map, of, tap } from 'rxjs';
import { UtilsService } from '../../shared/services/utils.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {

  loginRequest$ = createEffect(() => this.actions$.pipe(
    ofType( AuthActions.LoginRequest ),
    exhaustMap( ({ username, password, rememberMe }) => this.authService.loginRequest(username, password).pipe(
      map( ({ data, code, message }) => {
        if( code != 200 ){
          this.utils.showNotification( message );
          return AuthActions.LoginError();
        }
        this.authService.saveUserInStorage( rememberMe, data );
        this.router.navigateByUrl("dashboard");
        console.log( "redireccionando" );
        return AuthActions.LoginSuccess( { user: data } );
      } ),
      catchError(() => {
        this.utils.showNotification('Error en el inicio de sesión');
        return of(AuthActions.LoginError());
      })
    ) )
  ));

  tokenVefiry$ = createEffect(() => this.actions$.pipe(
    ofType( AuthActions.TokenVerify ),
    exhaustMap( ({ token, user }) => this.authService.verifyToken( token ).pipe(
      map( ({ data, code, message }) => {
        if( code != 200 || data == false ){
          this.utils.showNotification( message );
          return AuthActions.LoginError();
        }else{
          return AuthActions.LoginSuccess( { user } )
        }
      } ),
      catchError(() => {
        this.utils.showNotification('Error en el inicio de sesión');
        return of(AuthActions.LoginError());
      })
    ) )
  ));

  closeSession$ = createEffect(() => this.actions$.pipe(
    ofType( AuthActions.CloseSession ),
    tap( () => {
      this.authService.removeUserInStorage();
      this.router.navigateByUrl("auth")
    } )
  ),{ dispatch: false });

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private utils: UtilsService,
    private router: Router,
  ) {
  }
}