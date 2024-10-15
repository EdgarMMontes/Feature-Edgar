import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { LoginRequest } from '../../state/auth.actions';

@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  public formLogin!: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private store: Store
  ) { }

  ngOnInit(){
    this.formLogin = this.fb.group({
      'user': [ null, Validators.required ],
      'password': [ null, Validators.required ],
      'rememberMe': [false]
    }); 
  }

  submit(){
    if (this.formLogin.invalid) return;
    let username: string = (this.formLogin.get('user') as FormControl).value;
    let password: string = (this.formLogin.get('password') as FormControl).value;
    let rememberMe: boolean = (this.formLogin.get('rememberMe') as FormControl).value;

    this.store.dispatch( LoginRequest( { username, password, rememberMe  } ) );
  }

  redirToRegister(){
    this.router.navigateByUrl('auth/register')
  }
}
