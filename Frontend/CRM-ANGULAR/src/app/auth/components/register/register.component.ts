import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'auth-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent  implements OnInit{

  public formRegister!: FormGroup

  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.formRegister = this.fb.group({
      'user': [ null, Validators.required ],
      'password': [ null, Validators.required ],
      'phone': [ null, Validators.required ],
      'email': [ null, [Validators.required, Validators.email] ]
    }); 
  }

  register(){
    if (this.formRegister.invalid) return;
  }


  redirToLogin(){
    this.router.navigateByUrl('auth/login')
  }

}
