import { createReducer, on } from '@ngrx/store';
import { User } from '../interfaces/user.interface';
import * as AuthActions from './auth.actions';


export interface AuthState{
    user?: User;
}

export interface AppState{
  auth: AuthState
}

export const initialState: AuthState = {
    user: undefined,
};

export const authReducer = createReducer(
  initialState,
  on( AuthActions.LoginSuccess, ( state, { user } ) => ({ ...state, user }) ),
  on( AuthActions.CloseSession, ( state ) => ({ ...state, user: undefined }) )
);