import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ILogin } from 'src/app/models/login';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: ILogin = { userid: "admnin", password: "admin@123" }
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  todos: any = [];
  isFormSubmitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.returnUrl = '/dashboard';
    this.authService.logout();
  }
  // convenience getter for easy access to form fields  
  get f() { return this.loginForm.controls; }

  // onSubmit() {
  //   this.submitted = true;

  //   // stop here if form is invalid
  //   if (this.loginForm.invalid) {
  //     return;
  //   }

  //   this.loading = true;
  //   this.authenticationService.login(this.f.username.value, this.f.password.value)
  //     .pipe(first())
  //     .subscribe(
  //       data => {
  //         this.router.navigate([this.returnUrl]);
  //       },
  //       error => {
  //         this.alertService.error(error);
  //         this.loading = false;
  //       });
  // }


  logIn() {
    debugger
    this.submitted = true;
    this.isFormSubmitted = true
    this.todos = JSON.parse(localStorage.getItem('datas'))
    // const loginEmail = this.loginForm.controls.username.value
    // const loginPass = this.loginForm.controls.password.value
    // if (localStorage.getItem('datas')) {
    //   const loginDeets = JSON.parse(localStorage.getItem('datas')).find(e => e.username = this.f.username.value)
    //   if (loginEmail === loginDeets.username) {
    //     console.log('Login successful')
    //   } else {
    //     console.log('Wrong credentials')
    //   }
    // } else {
    //   console.log('Not a registered user')
    // }









    const loginEmail = this.loginForm.controls.username.value
    const loginPass = this.loginForm.controls.password.value
    if (localStorage.getItem('datas')) {
      const allStoredUsers = JSON.parse(localStorage.getItem('datas'));
      const matchedUser = allStoredUsers.filter(user => {
        return loginEmail === user.username && loginPass === user.password;
      })
      if (matchedUser.length) {
        console.log('Login successful')
      } else {
        console.log('Wrong credentials')
      }
    } else {
      console.log('Wrong credentials') // Don't say "Not a registered user"
    }
  }
}
