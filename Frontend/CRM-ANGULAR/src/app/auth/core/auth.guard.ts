import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Store } from '@ngrx/store';
import { LoginRequest, TokenVerify } from '../state/auth.actions';
import { map, tap } from 'rxjs';
import { selectAuthUser } from '../state/auth.selectors';
import { AppState } from '../state/auth.reducer';

export const authGuard: CanActivateFn = (route, state) => {

  const router: Router = inject( Router );
  const authService: AuthService = inject( AuthService );
  // const store: Store = inject( Store );
  const store: Store<AppState> = inject(Store);

  let user = authService.getUserInSessionStorage();
  if(user) {
    store.dispatch( TokenVerify( { token: user.token, user } ) );
  }else{
    user = authService.getUserInLocaltorage();
    if(user) {
      store.dispatch( LoginRequest( { username: user.username, password: user.password, rememberMe: true } ) );
    }
  }
  return store.select( selectAuthUser ).pipe(
    map( user => {
      if( !user ) {
        router.navigateByUrl("auth");
        return false;
      }
      if( !user.tokenActive ){
        router.navigateByUrl("auth");
        return false;
      }
      return true;
    } )
  )
};
