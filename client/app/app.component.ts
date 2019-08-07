import { Component, OnInit } from '@angular/core';
import { APP_NAME } from './constants/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = APP_NAME;

  constructor(){}

  ngOnInit(){ }
  
}
