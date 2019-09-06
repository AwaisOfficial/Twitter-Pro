import { Component, OnInit } from '@angular/core';
import { Commons } from 'client/app/helpers';
import { AuthService, OperationsService } from 'client/app/services';
import { forkJoin } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'shared-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  commons : Commons = new Commons();
  queryParams : any;
  profile : any;
  posts   : Array<any> = [];

  constructor(private router : Router ,
              private authService : AuthService ,
              private operationsService : OperationsService) { }

  ngOnInit() {
    this.queryParams = history.state.data;
    this.profile = this.queryParams.profile;    
    this.getData();    
  }

  getData() {    
    const profile = this.operationsService.getOperations('member-profile' , { memberId : this.queryParams.profile._id });
    const posts   = this.operationsService.getOperations('get-posts', { userId : this.queryParams.profile._id });
    const requests= [];
    requests.push(profile);
    if(!this.queryParams.suggestedMember)
    requests.push(posts);
    const data = forkJoin(requests);
    data.subscribe((response : any) => {
      if(response){
        this.profile['memberInfo'] = response[0].success ? response[0].response[0] : null ;
        this.posts   = response[1] ? ( response[1].success ? response[1].response : {} ) : null;
      }
    });
  }

  OnSubscription(event : any){
    if(event && event.followee){
      console.log(event.followee._id)
      const posts   = this.operationsService.getOperations('get-posts', { userId : event.followee._id });
      posts.subscribe((response : any) => {
        console.log('Get Posts', response);
        if(response.success){          
          this.queryParams.suggestedMember = false;
          this.posts   = response.success ? response.response : null;
        }
      });
    }
  }

  editProfile(profile : any) {
    this.router.navigate(['/settings'], { state: { data: { profile : profile } } });
  }
  
}
