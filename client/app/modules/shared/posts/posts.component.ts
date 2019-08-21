import { Component, OnInit, Input } from '@angular/core';
import { OperationsService, PostStoreService, AuthService } from 'client/app/services';
import { environment } from 'client/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  @Input('role') role : string;
  @Input('newCreatedPost') set newCreatedPost(post: any){
    //this.posts.splice(0 ,0 , post);
    this.postStore.addItem(post);
  };
  
  posts: Array<any> = [];
  posts$ : Observable<any>;


  constructor(private operationsService: OperationsService ,
              private postStore : PostStoreService ,
              private authService : AuthService) { }

  ngOnInit() {
    const endPoint = this.role == 'member' ? 'get-posts' : 'get-followees-posts';
    this.getPosts(endPoint);
  }

  getPosts(endPoint){
    this.posts$ = this.postStore.allData;
    this.postStore.getOperations(endPoint);
  }

  getFilePath(fileName: string){
    return environment.APIEndPoint + 'files/' + fileName;
  }

  userCompleteName(user) {
    let name = '';
    if(user){
      name += ( user.firstName ? user.firstName : '');
      name += ( user.lastName  ? ' ' + user.lastName  : '');
    }
    return name;
  }  

  updatePostLike(post){
    this.operationsService.postOperations('like-post' , { postId : post._id , userId : this.authService.userVal['user']['_id']}).subscribe(response => {
      if(response.success)
        this.postStore.updateData(response.response, 'update');      
    },
    error => console.error('Like Post Error ', error) );
  }

}
