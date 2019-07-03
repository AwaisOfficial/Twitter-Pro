import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SERVER_URL } from 'src/app/constants/constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OperationsService {

  constructor(private http: HttpClient) { }

  getOperations(end_point: string){
    return this.http.get(`${SERVER_URL + end_point}`);
  }

  postOperations(end_point: string, data: any) : Observable<any> {
    return this.http.post(`${SERVER_URL + end_point}` , data);
  }

 


}
