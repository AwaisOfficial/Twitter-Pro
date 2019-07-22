import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Http_Headers } from '../../helpers/headers';
import { JWTOKEN } from '../../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class OperationsService {

  public httpHeaders: Http_Headers;
  constructor(private http: HttpClient) {
    this.httpHeaders = new Http_Headers();
   }

  getOperations(end_point: string) {
    return this.http.get(`${environment.APIEndPoint + end_point}` , { headers : this.httpHeaders.getHeaders() , withCredentials: true });
  }

  postOperations(end_point: string, data: any) : Observable<any> {
    const url = `${environment.APIEndPoint + end_point}`;
    console.log(url , this.getHeaders());
    return this.http.post(url , data , { headers: this.getHeaders() });
  }

  
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
