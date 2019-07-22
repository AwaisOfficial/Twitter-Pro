import { Component, OnInit } from '@angular/core';
import { OperationsService } from '../../services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private operationsService: OperationsService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    let data = { text : 'This is the first post test.', images: ['http://localhost:3000/uploads/birds.jpg'] , role : 'member'};
    const post = this.operationsService.postOperations('create-post', data);
    post.subscribe(result => {
      console.log("Post Creation Result", result);
    },
    error => console.error("Post Creation Error", error));
  }

}
