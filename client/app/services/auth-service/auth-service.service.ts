import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import * as jwt_decode from 'jwt-decode';
import { SERVER_URL, JWTOKEN, USER_INFO } from 'client/app/constants/constants';
import { map } from 'rxjs/operators'
import { User } from 'client/app/interfaces/user';
import { Http_Headers } from '../../helpers/headers';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userSubject : BehaviorSubject<any>;

  constructor(private http: HttpClient) {
    this.userSubject = new BehaviorSubject<any>(JSON.parse(this.user));
  }

  login(payload: any){
    const url = SERVER_URL + 'login';
    return this.http.post(`${url}` , payload).pipe(map((response : any) => {
      if(response && response.success) {
        this.Token = response.token;
        const user = this.decodeJWT();
        this.user = user;
        this.userSubject.next(user);
        return user;
      }
      else  
        return response || '';
    }));
  }

  getTwitterUser(){
    const url = SERVER_URL + 'twitter-profile';
    return this.http.get(`${url}`, {headers: new Http_Headers().getHeaders(), withCredentials : true}).pipe(map((response : any) => {
      console.log('Twitter Profile ', response);
      if(response && response.success) {
        this.Token = response.token;
        const user = this.decodeJWT();
        this.user = user;
        this.userSubject.next(user);
        return user;
      }
      else  
        return response || '';
    }));
  }

  get userVal() : User { return this.userSubject.value; }
  set Token(token) { localStorage.setItem(JWTOKEN, token);}
  get Token() : string { return localStorage.getItem(JWTOKEN);}
  set user(user) { localStorage.setItem(USER_INFO , JSON.stringify(user)); }
  get user() { return localStorage.getItem(USER_INFO); }
  
  isAuthenticated(): boolean { return localStorage.getItem(JWTOKEN) ? true : false; }

  decodeJWT(){
    try { return jwt_decode(localStorage.getItem(JWTOKEN))}
    catch (error) { return null;}
  }

  logOut() { 
    localStorage.removeItem(JWTOKEN);
    this.userSubject.next(null);
  }
}
