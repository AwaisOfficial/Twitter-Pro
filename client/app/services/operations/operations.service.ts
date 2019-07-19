import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OperationsService {

  constructor(private http: HttpClient) { }

  getOperations(end_point: string){    
    return this.http.get(`${environment.APIEndPoint + end_point}` , { headers : this.getHeaders() , withCredentials: true });
  }

  postOperations(end_point: string, data: any) : Observable<any> {
    return this.http.post(`${environment.APIEndPoint + end_point}` , data);
  }

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
