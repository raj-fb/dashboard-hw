import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  constructor(private http:HttpClient, 
              private _router: Router) { }

  loggedIn(){
    return !!localStorage.getItem('username') && !!localStorage.getItem('password');
  }

  logoutUser(){
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    this._router.navigate(['login']);
  }

}
