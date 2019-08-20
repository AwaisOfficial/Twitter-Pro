import { Component, OnInit } from '@angular/core';
import { OperationsService, AuthService, SuggestionStoreService } from 'client/app/services';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'client/environments/environment';

@Component({
  selector: 'app-suggested-people',
  templateUrl: './suggested-people.component.html',
  styleUrls: ['./suggested-people.component.scss']
})
export class SuggestedPeopleComponent implements OnInit {

  people : Observable<Array<any>>;

  constructor(private operationsService : OperationsService , 
              private authService: AuthService,
              private suggestionStore : SuggestionStoreService) { }

  ngOnInit() {
    // this.people = this.operationsService.getOperations('suggested-people').pipe(map((result : any) => result.response));
    // this.people.subscribe(result => console.log(result));

    this.people = this.suggestionStore.allData;
    this.suggestionStore.getOperations('suggested-people');
  }

  fullName(user : any){
    let fullName = user.firstName ? user.firstName : '';
        fullName += user.lastName ? ' ' + user.lastName  : '';
    return fullName;

  }

  userImage(fileName: string){
    //return environment.APIEndPoint + 'files/' + fileName;
    return environment.APIEndPoint + 'files/1565175549519_birds.jpg'
  }

  startFollowing(followee : any){
    const follower = this.authService.userVal['user'];
    const data = { followee : followee , role: followee.role , follower : follower  };
    this.operationsService.postOperations('start-following', data).subscribe(result => {
      if(result.success)
        this.suggestionStore.removeItem(followee);
    },
    error => console.error("Start Following Error", error));
  }

}
