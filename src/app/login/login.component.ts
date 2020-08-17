import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users = {
    "username": "admin",
    "password": "admin123"
  }
  loginUserData = {}
  constructor(private _auth:AuthService,
              private _router: Router) { }

  ngOnInit() {
  }

  onSubmit(value: any) {
    if(this.users.username === value.username && this.users.password === value.password){
      localStorage.setItem('username', this.users.username);
      localStorage.setItem('password', this.users.password);
      this._router.navigate(['/products'])
    }
  }

  
  // loginUser(){
  //   this._auth.loginUser(this.loginUserData)
  //   .subscribe(
  //     res => {
  //       console.log(res)
  //       localStorage.setItem('token', res.token = "xyz")
  //       this._router.navigate(['/products'])
  //     },
  //     err => console.log(err)
  //   )
  // }

}
