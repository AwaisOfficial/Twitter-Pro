import { Component, OnInit } from '@angular/core';
import { OperationsService, AuthService, SuggestionStoreService } from 'client/app/services';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'client/environments/environment';
import { Router } from '@angular/router';
import { Commons } from 'client/app/helpers';

@Component({
  selector: 'app-suggested-people',
  templateUrl: './suggested-people.component.html',
  styleUrls: ['./suggested-people.component.scss']
})
export class SuggestedPeopleComponent implements OnInit {

  response : Observable<Array<any>>;
  commons  : Commons;

  constructor(private operationsService : OperationsService , 
              private authService: AuthService,
              private router : Router ,
              private suggestionStore : SuggestionStoreService) { }

  ngOnInit() {
    this.commons  = new Commons();
    this.response = this.suggestionStore.allData;
    this.suggestionStore.getOperations('suggested-people');
  }

  fullName(user : any){
    let fullName  = user.firstName ? user.firstName : '';
        fullName += user.lastName ? ' ' + user.lastName  : '';
    return fullName;

  }

  userImage(fileName: string){
    console.log(fileName);
    return environment.APIEndPoint + 'files/' + fileName;
    //return environment.APIEndPoint + 'files/1565175549519_birds.jpg'
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

  showProfile(member : any) : void {
    this.router.navigate(['/profile'], {state: { data: { profile : member , suggestedMember : true } } });
  }

}
