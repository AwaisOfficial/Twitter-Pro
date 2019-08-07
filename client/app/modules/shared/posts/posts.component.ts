import { Component, OnInit, Input } from '@angular/core';
import { OperationsService } from 'client/app/services';
import { environment } from 'client/environments/environment';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  @Input('newCreatedPost') set newCreatedPost(post: any){
    this.posts.splice(0 ,0 , post);
  };
  
  posts: Array<any> = [];

  constructor(private operationsService: OperationsService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts()  {
    this.operationsService.getOperations('get-posts').subscribe((response : any) => {
      if(response.success)
        this.posts = response.posts;
    },
    error => console.error("Posts Fetching Error ", error));
  }

  getFilePath(fileName: string){
    return environment.APIEndPoint + 'files/' + fileName;
  }

}
