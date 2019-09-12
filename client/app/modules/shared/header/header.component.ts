import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'client/app/services';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';

const newLocal = 'yes';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input('title') title : string;  
  navItems: Array<any> = [
     { icon : 'fas fa-home' , name : 'Home' ,link : ''},
     { icon : 'fas fa-envelope', name : 'Messages' , link : ''},
     { icon : 'fas fa-bell' , name : 'Notifications', link : ''},
     { icon : 'fas fa-user' , name : 'Profile', link : '/profile'},
     { icon : 'fas fa-power-off', name : 'LogOut' , link : '/logOut' }
    ]
  constructor(private authService: AuthService,
              private router: Router,
              private modalService: NgbModal) { }

  ngOnInit() {}

  get isLoggedIn() {
    return this.authService.userVal ? true : false;
  }

  confirm() {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.data = { title : 'Logout Confirmation' , content : 'Are you sure that you want to logout ?' , type : 'confirmation'};
    modalRef.result.then((result) => {
      if (result == newLocal) { this.logOut(); }
    });
  }

  logOut() {
    this.authService.logOut();
    this.router.navigateByUrl('login');
  }

  myFunction() {
    var y = document.getElementById("m");
    y.style.display = "none";
    var z = document.getElementById("c");
    z.style.display = "block";
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
      y.style.display = "block";
      z.style.display = "none";
    }
  }

  navigateTo(link : string){
    if(link == '/logOut')
      this.confirm();
    else if(link == '/profile')
      this.router.navigate(['/profile'], {state: { data: { profile : this.authService.userVal['user'] , suggestedMember : false } } });
    else {
      
      const role = this.authService.userVal['user']['role'];
      console.log(role , JSON.parse(this.authService.user) , this.authService.userVal);
      this.router.navigateByUrl(role + link);
    }
  }

}
