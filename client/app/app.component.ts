import { Component, OnInit } from '@angular/core';
import { OperationsService, AuthService } from './services';
import { APP_NAME } from './constants/constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = APP_NAME;

  constructor(private authService: AuthService){}

  ngOnInit(){ }
  
}
