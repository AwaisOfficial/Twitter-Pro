import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  newCreatedPost : any;

  constructor() { }

  ngOnInit() {
  }

  addNewPost(event){
    console.log(event.post);
    this.newCreatedPost = event.post ? event.post : undefined;
  }

}
