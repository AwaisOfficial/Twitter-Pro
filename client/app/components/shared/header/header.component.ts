import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'client/app/services';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input('title') title : string;  

  constructor(private authService: AuthService,
              private router: Router,
              private modalService: NgbModal) { }

  ngOnInit() {}

  get isLoggedIn(){
    return this.authService.userVal ? true : false;
  }

  confirm() {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.data = { title : 'Logout Confirmation' , content : 'Are you sure that you want to logout ?'};
    modalRef.result.then((result) => {
      if(result == 'yes') this.logOut();
    });
  }

  logOut(){
    this.authService.logOut();
    this.router.navigateByUrl('login');
  }


}
