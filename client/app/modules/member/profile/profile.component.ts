import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'client/app/services';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  private profile : any;

  constructor(private authService : AuthService ) { }

  ngOnInit() {
    this.profile = this.authService.userVal ? this.authService.userVal['user'] : null;
  }
}
