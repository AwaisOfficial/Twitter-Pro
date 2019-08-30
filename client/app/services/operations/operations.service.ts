import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Http_Headers } from 'client/app/helpers/headers';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OperationsService {

  constructor(private http: HttpClient) { }

  getOperations(end_point: string , params? : any){    
    let httpParams  = new HttpParams();
    if(params) 
     Object.keys(params).forEach(key => { httpParams = httpParams.append(key , params[key]);  }); 
    return this.http.get(`${environment.APIEndPoint + end_point}` , { headers : new Http_Headers().getHeaders() , withCredentials: true , params : httpParams });
  }

  postOperations(endPoint: string, data: any) : Observable<any> {
    if( this.includeHeadersOrNot(endPoint) )
      return this.http.post(`${environment.APIEndPoint + endPoint}` , data , { headers : new Http_Headers().getHeaders() , withCredentials: true } ).pipe(catchError(error => {
        return of(error);
      }));
    else
      return this.http.post(`${environment.APIEndPoint + endPoint}` , data  ).pipe(catchError(error => { return of(error) }));
  }

  includeHeadersOrNot(endPoint: string){
    if(['register', 'post-images'].indexOf(endPoint) > -1) return false;
    else  return true;
  }
  

}
