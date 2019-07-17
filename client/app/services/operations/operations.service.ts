import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SERVER_URL } from 'client/app/constants/constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OperationsService {

  constructor(private http: HttpClient) { }

  getOperations(end_point: string){
    return this.http.get(`${SERVER_URL + end_point}` , {headers : this.getHeaders()});
  }

  postOperations(end_point: string, data: any) : Observable<any> {
    return this.http.post(`${SERVER_URL + end_point}` , data);
  }

  getHeaders(): HttpHeaders {
    const headers : HttpHeaders = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    headers.append("Content-Type" ,  "application/json");
    headers.append("Access-Control-Allow-Credentials" , "true");
    return headers;
  }
 


}
