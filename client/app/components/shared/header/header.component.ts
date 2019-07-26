import { Component, OnInit, Input } from '@angular/core';
import { OperationsService, AuthService } from 'client/app/services';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertComponent } from '../alert/alert.component';

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

  // confirm() {
  //   this.modalService.open(AlertComponent);
  // }

}
