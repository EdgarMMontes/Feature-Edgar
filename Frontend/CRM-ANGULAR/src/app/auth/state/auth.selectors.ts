import { createSelector } from '@ngrx/store';
import { AppState, AuthState } from './auth.reducer';


export const selectAuth = (state: AppState) => state.auth;

export const selectAuthUser = createSelector(
   selectAuth,
  (state) => state.user
);