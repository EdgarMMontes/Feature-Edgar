import { createAction, props } from '@ngrx/store';
import { User } from '../interfaces/user.interface';

export const LoginRequest = createAction(
    '[Login Component] Login Request',
    props<{ username: string; password: string, rememberMe: boolean }>()
);

export const TokenVerify = createAction(
    '[Init Component] Token Verify',
    props<{ token: string; user: User }>()
);

export const LoginSuccess = createAction(
    '[Login Component] Login Success',
    props<{ user: User }>()
);

export const LoginError = createAction(
    '[Login Component] Login Error',
);

export const CloseSession = createAction(
    '[TopBar Component] Close Session',
);
