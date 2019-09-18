import { Component, OnInit, Input } from '@angular/core';
import { OperationsService, PostStoreService, AuthService } from 'client/app/services';
import { BehaviorSubject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateCommentComponent } from '../create-comment/create-comment.component';
import { Commons } from 'client/app/helpers';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { USER_INFO } from 'client/app/constants/constants';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  proUser: string;
  @Input('role') role : string;
  @Input('pageName') routerLink : string;
  @Input('userId') userId : string;
  @Input('newCreatedPost') set newCreatedPost(post: any){
    if(post)
      this.addItem(post);
  };

  commons : Commons;
  private posts$ = new BehaviorSubject<any[]>([]);
  private dataStore : { data : any };
  files: any =  { images : []  , videos : [] ,  imagesCount : 0 , videosCount : 0 };
  
  @Input()
  set posts(posts) {     
    if(!this.dataStore) this.dataStore = { data: [] };
    this.dataStore.data = posts;
    this.posts$.next( Object.assign( {} , this.dataStore).data);
  };
  get posts() { return this.posts$.getValue(); }

  constructor(private operationsService: OperationsService ,
              private postStore : PostStoreService ,
              private authService : AuthService,
              private modalService: NgbModal,
              private router: Router) { }

  ngOnInit() {
    this.proUser = JSON.parse(localStorage.getItem(USER_INFO)).user.userName;
    this.commons = new Commons();
    if(!this.posts || this.posts.length == 0) {
      this.dataStore = { data: [] };
      const endPoint = (this.role == 'member' || this.role == 'user') ? 'get-posts' : 'get-followees-posts';
      this.getPosts(endPoint);
    }
  }

  getPosts(endPoint) { 
    this.userId = this.userId ? this.userId : this.authService.userVal['user']._id
    const posts = this.operationsService.getOperations(endPoint , { userId : this.userId , routerLink : this.routerLink , role : this.role });
    posts.pipe(map((result : any) => result.response))
         .subscribe((response : any) => {
      //console.log('Posts Response', response);
      if(response.length > 0){
        this.dataStore.data = response;
        this.posts$.next( Object.assign ( { }, this.dataStore).data  );
      }
    },
    error => console.error('Posts Error ', error));
  }

  addItem(item : any) {
    const data = <any[]>this.dataStore.data;
    data.splice(0 , 0 , item);
    this.posts$.next(Object.assign ( { }, this.dataStore).data);
  }

  /* UPDATING DATA BY DELETING OR UPDATING SOME ITEM */
  updateData(item : any , action : string){
    const data = this.dataStore.data;
    if( !data && data.length == 0 ) return;
    data.forEach((currentItem , index) => {
      if(item._id == currentItem._id ) {       
        console.log('Updated Item' ,item);
        action == 'delete' ? this.dataStore.data.splice(index , 1)  
                           : this.dataStore.data[index] = item;   
      }     
    });
    this.posts$.next(Object.assign ( { }, this.dataStore).data);
  }

  updatePostLike(post) {
    const action = this.isPostLikedByUser(post) ? 'disLike' : 'like';
    this.operationsService.postOperations('like-post' , { postId : post._id , memberId : post.user._id ,userId : this.authService.userVal['user']['_id'] , action : action }).subscribe(response => {
      if(response.success)
        this.updateData(response.response, 'update');      
    },
    error => console.error('Like Post Error ', error) );
  }

  isPostLikedByUser(post) : boolean {
    return (post && post.likers) ? ( post.likers.indexOf(this.authService.userVal['user']['_id']) > -1 ? true : false ) : false;
  }

  isRePostedByUser(post) : boolean{
    return (post && post.rePosters) ? ( post.rePosters.indexOf(this.authService.userVal['user']['_id']) > -1 ? true : false ) : false;
  }

  createPost(post : any){
    const modalRef = this.modalService.open(CreateCommentComponent);
    modalRef.componentInstance.data = { title : 'Create Comment' , post : post };
    modalRef.result.then((result) => { 

    });
  }

  postDeleteConfirmation( post : any) {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.data = { title : 'Delete Confirmation' , content : 'Are you sure that you want to delete this post ?' , type : 'confirmation'};
    modalRef.result.then((result) => {
      if (result == 'yes') { this.deletePost(post); }
    }).catch(result => {
      console.log(result);
    });
  }

  deletePost(post : any){
    const deletePost = this.operationsService.postOperations('delete-post', { postId : post._id});
    deletePost.subscribe(response => {
      if(response.success)
        this.updateData(post, 'delete');      
    },
    error => console.error('Delete Post Error', error));
  }

  goToProfile(user){
    this.router.navigate(['/profile'], {state: { data: { profile : user , suggestedMember : false } } });
  }

}
