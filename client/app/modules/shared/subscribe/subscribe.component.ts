import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Commons } from 'client/app/helpers';
import { AuthService, OperationsService, SuggestionStoreService } from 'client/app/services';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent implements OnInit {

  @Input('profile') profile : any;
  @Output() onSubscribe = new EventEmitter<any>();
  commons : Commons = new Commons();

  constructor(private authService: AuthService , 
              private operationsService : OperationsService,
              private suggestionStore : SuggestionStoreService) { }

  ngOnInit() {
  }

  startFollowing(followee : any){
    const follower = this.authService.userVal['user'];
    const data = { followee : followee , role: followee.role , follower : follower  };
    this.operationsService.postOperations('start-following', data).subscribe(result => {
      console.log('Result' , result);
      if(result.success) {
        this.suggestionStore.removeItem(followee);
        this.onSubscribe.emit({ followee : followee });
      }
    },
    error => console.error("Start Following Error", error));
  }
}
