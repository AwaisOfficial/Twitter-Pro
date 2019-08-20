import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import * as jwt_decode from 'jwt-decode';
import { JWTOKEN, USER_INFO } from 'client/app/constants/constants';
import { map } from 'rxjs/operators'
import { IUser } from 'client/app/interfaces/user';
import { Http_Headers } from '../../helpers/headers';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public userSubject : BehaviorSubject<any>;

  constructor(private http: HttpClient) {
    this.userSubject = new BehaviorSubject<any>(JSON.parse(this.user));
  }


  register(endPoint: string , payload: any){
    const url = environment.APIEndPoint + endPoint;
    return this.http.post(`${url}` , payload);
  }

  login(payload: any){
    const url = environment.APIEndPoint + 'login';
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
    const url = environment.APIEndPoint + 'twitter-profile';
    return this.http.get(`${url}`, {headers: new Http_Headers().getHeaders(), withCredentials : true}).pipe(map((response : any) => {
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

  get userVal() : any { return this.userSubject.value; }
  set Token(token) { localStorage.setItem(JWTOKEN, token);}
  get Token() : string { return localStorage.getItem(JWTOKEN);}
  set user(user) { localStorage.setItem(USER_INFO , JSON.stringify(user)); }
  get user() : any{ 
    return localStorage.getItem(USER_INFO);
  }
  get userCompleteName() {
    let name = '';
    if(this.userVal){
      name += ( this.userVal.user.firstName ? this.userVal.user.firstName : '');
      name += ( this.userVal.user.lastName  ? ' ' + this.userVal.user.lastName  : '');
    }
    return name;
  }
  
  isAuthenticated(): boolean { return localStorage.getItem(JWTOKEN) ? true : false; }

  decodeJWT(){
    try { return jwt_decode(localStorage.getItem(JWTOKEN))}
    catch (error) { return null;}
  }

  logOut() { 
    localStorage.removeItem(JWTOKEN);
    localStorage.removeItem(USER_INFO);
    this.userSubject.next(null);    
  }
}
