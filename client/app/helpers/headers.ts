import { HttpHeaders } from '@angular/common/http';

export class Http_Headers {

    constructor(){}

    getHeaders(): HttpHeaders {
        const headers : HttpHeaders = new HttpHeaders();
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, DELETE');
        headers.append("Content-Type" ,  "application/json");
        headers.append("Access-Control-Allow-Credentials" , "true");
        headers.append('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept, Access-Control-Allow-Origin');
        return headers;
      }
    
}