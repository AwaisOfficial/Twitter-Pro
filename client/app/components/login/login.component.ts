import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'client/app/services';
import { ActivatedRoute, Router } from '@angular/router';

import { APP_NAME } from 'client/app/constants/constants';
import { Observable } from 'rxjs';
import { environment } from 'client/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;
  submitted : boolean;
  response: any; 
  SERVER_URL : string;

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private authService: AuthService) { }

  ngOnInit() {

    this.SERVER_URL = environment.APIEndPoint;
    console.log(this.SERVER_URL);
    this.submitted = false;    

    this.loginForm = this.formBuilder.group({
      userName : ['', Validators.required] ,
      password : ['' , Validators.required]
    });
    this.loginForm.valueChanges.subscribe(result => {this.response = undefined; });
    this.authService.logOut();
    this.route.queryParamMap.subscribe((allParams : any) => {
      if(allParams.params && allParams.params.isVerified)
        this.response = {success : true, message : 'Email verified. Welcome to '+ APP_NAME + '.'};
      else if(allParams.params && allParams.params.isAuthenticated == 'true')
        this.getTwitterUser();
    });
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if(this.loginForm.invalid) {
      return;
    }
    //console.log(this.loginForm.value);
    
    this.authService.login(this.loginForm.value).subscribe(
    response => this.handleResponse(response),
    error    => this.handleError(error));
  }

  getTwitterUser(){
    
    let twitterLogin : Observable<any> = this.authService.getTwitterUser();
    twitterLogin.subscribe(
    (response : any) =>  this.handleResponse(response),
    (error : any )   => this.handleError(error));
  }

  handleResponse(response : any){
    
    this.response = response;
    if(response && response.user) 
      this.router.navigate(['/']);
  }

  handleError(error : any){
    
    console.error('Login Error', error);
  }

}
