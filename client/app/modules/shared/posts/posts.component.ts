import { Component, OnInit, Input } from '@angular/core';
import { OperationsService, PostStoreService, AuthService } from 'client/app/services';
import { environment } from 'client/environments/environment';
import { Observable } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateCommentComponent } from '../create-comment/create-comment.component';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  @Input('role') role : string;
  @Input('newCreatedPost') set newCreatedPost(post: any){
    this.postStore.addItem(post);
  };
  
  posts$ : Observable<any>;


  constructor(private operationsService: OperationsService ,
              private postStore : PostStoreService ,
              private authService : AuthService,
              private modalService: NgbModal) { }

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
    const action = this.isPostLikedByUser(post) ? 'disLike' : 'like';
    this.operationsService.postOperations('like-post' , { postId : post._id , userId : this.authService.userVal['user']['_id'] , action : action }).subscribe(response => {
      if(response.success)
        this.postStore.updateData(response.response, 'update');      
    },
    error => console.error('Like Post Error ', error) );
  }

  isPostLikedByUser(post) : boolean {
    return post.likers.indexOf(this.authService.userVal['user']['_id']) > -1 ? true : false;
  }

  createPost(){
    const modalRef = this.modalService.open(CreateCommentComponent);
    modalRef.componentInstance.data = { title : 'Logout Confirmation' , content : 'Are you sure that you want to logout ?' , type : 'confirmation'};
    modalRef.result.then((result) => {
     
    });
  }


}
