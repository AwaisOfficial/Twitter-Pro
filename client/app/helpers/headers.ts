import { HttpHeaders } from '@angular/common/http';
import { JWTOKEN } from '../constants/constants';

export class Http_Headers {

    constructor(){}

    getHeaders(): HttpHeaders {
      let headers : HttpHeaders = new HttpHeaders();
      headers = headers.append('Authorization', localStorage.getItem(JWTOKEN));
      headers = headers.append('Access-Control-Allow-Origin', '*');
      headers = headers.append('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, DELETE');
      headers = headers.append("Content-Type" ,  "application/json");
      headers = headers.append("Access-Control-Allow-Credentials" , "true");
      headers = headers.append('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept, Access-Control-Allow-Origin');
      return headers;
      }
    
}