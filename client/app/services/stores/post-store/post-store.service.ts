import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'client/environments/environment';
import { Http_Headers } from 'client/app/helpers';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostStoreService {

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
                    error => console.error('Couldn\'t Get Data.' , error));
  }

  /* UPDATING DATA BY DELETING OR UPDATING SOME ITEM */
  updateData(item : any , action : string){
    const data = this.dataStore.data;
    if( !data && data.length == 0 ) return;
    data.forEach((currentItem , index) => {
      if(item._id == currentItem._id ){       
        action == 'delete' ? this.dataStore.data.splice(index , 1)  
                           : this.dataStore.data[index] = item;   
      }     
    });
    this.dataSubject.next(Object.assign ( { }, this.dataStore).data);
  }

  addItem(item : any){
    const data = <any[]>this.dataStore.data;
    data.push(item);
    this.dataSubject.next(Object.assign ( { }, this.dataStore).data);
  }

}
