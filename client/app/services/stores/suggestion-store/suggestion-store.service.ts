import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'client/environments/environment';
import { Http_Headers } from 'client/app/helpers';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SuggestionStoreService {

  private readonly dataSubject: BehaviorSubject<any>;
  private dataStore : { data : any };

  constructor(private http: HttpClient) { 
    this.dataSubject = <BehaviorSubject<any>>new BehaviorSubject([]);
    this.dataStore = { data: [] };
  }

  get allData() { return this.dataSubject.asObservable(); }
    
  getOperations(end_point: string){    
    return this.http.get(`${environment.APIEndPoint + end_point}` , { headers : new Http_Headers().getHeaders() , withCredentials: true })
                    .pipe(map((result : any) => result.response))
                    .subscribe(( data : any ) => {
                      this.dataStore.data = data;
                      this.dataSubject.next( Object.assign( {} , this.dataStore).data);
                    },
                    error => {
                      console.error('Couldn\'t Get SuggestedPeople.' , error);
                      this.dataStore.data = error;
                      this.dataSubject.next(Object.assign( {} , this.dataStore).data);
                    });
  }

  removeItem(item: any) {
    const data = this.dataStore.data;
    if( !data && data.length == 0 ) return;

    data.forEach((currentItem , index) => {
      if(item._id == currentItem._id)
        this.dataStore.data.splice(index , 1);
    });
    this.dataSubject.next(Object.assign ( { }, this.dataStore).data);
  }

}
