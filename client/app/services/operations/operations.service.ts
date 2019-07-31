import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Http_Headers } from 'client/app/helpers/headers';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OperationsService {

  constructor(private http: HttpClient) { }

  getOperations(end_point: string){    
    return this.http.get(`${environment.APIEndPoint + end_point}` , { headers : new Http_Headers().getHeaders() , withCredentials: true });
  }

  postOperations(endPoint: string, data: any) : Observable<any> {
    if( this.includeHeadersOrNot(endPoint) )
      return this.http.post(`${environment.APIEndPoint + endPoint}` , data , { headers : new Http_Headers().getHeaders() , withCredentials: true } ).pipe(catchError(error => of(error)));
    else
      return this.http.post(`${environment.APIEndPoint + endPoint}` , data  ).pipe(catchError(error => of(error)));
  }

  includeHeadersOrNot(endPoint: string){
    if(['register', 'post-images'].indexOf(endPoint) > -1) return false;
    else  return true;
  }
  

}
