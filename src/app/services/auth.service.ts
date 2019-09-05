import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  loginUser(user: any) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http
      .post('http://localhost:3000/api/users/login', JSON.stringify(user), { headers: headers })
      .pipe(map(res => {
        let result = res !== null && res['token'] !== null
        if (result) this.setToken(res['token'])
        return result;
      }))
  }

  registerUser(user: any) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http
      .post('http://localhost:3000/api/users/register', JSON.stringify(user), { headers: headers })
  }

  logoutUser() {
    localStorage.removeItem('token')
  }

  setToken(token: any) {
    localStorage.setItem('token', token)
  }

  static get token() {
    return localStorage.getItem('token')
  }

  get isLoggedIn() {
    return AuthService.token !== null
  }

}
