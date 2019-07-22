import { Component, OnInit, Input } from '@angular/core';
import { OperationsService, AuthService } from 'client/app/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input('title') title : string;
  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {}

  get isLoggedIn(){
    return this.authService.userVal ? true : false;
  }

  logOut(){
    this.authService.logOut();
    this.router.navigateByUrl('login');
  }

}
