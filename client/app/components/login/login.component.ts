import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService, OperationsService } from 'client/app/services';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularButtonLoaderService } from 'angular-button-loader';
import { APP_NAME } from 'client/app/constants/constants';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;
  submitted : boolean;
  returnUrl : string; 
  response: any; 

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private btnLoaderService: AngularButtonLoaderService,
              private operationsService: OperationsService,
              private authService: AuthService) { }

  ngOnInit() {

    this.submitted = false;

    this.loginForm = this.formBuilder.group({
      user_name : ['', Validators.required] ,
      password : ['' , Validators.required]
    });
    this.loginForm.valueChanges.subscribe(result => {this.response = undefined; });
    this.authService.logOut();
    //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

    this.route.queryParamMap.subscribe((allParams : any) => {
      console.log('Params', allParams.params);
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
    this.btnLoaderService.hideLoader();
    this.authService.login(this.loginForm.value).subscribe(user => {
      console.log('User', user);
      this.btnLoaderService.hideLoader();
      this.response = user;
      if(user) 
        this.router.navigate([this.returnUrl]);
    },
    error => {
      console.error('Error', error);
      this.btnLoaderService.hideLoader();
    });
  }

  handlError(error: any){    
  }

  getTwitterUser(){
    this.btnLoaderService.displayLoader();
    let twitterLogin : Observable<any> = this.operationsService.getOperations('twitter-profile');
    twitterLogin.subscribe((result : any) => {
      this.btnLoaderService.hideLoader();
      console.log('Twitter User\'s Info Result ', result);
    },
    error => {
      this.btnLoaderService.hideLoader();
      console.error('Twitter User\'s Info Error', error);
    });
  }

}
