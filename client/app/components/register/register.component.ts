import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OperationsService, AuthService } from 'client/app/services';
import { EMAIL_PATTERN, ERROR_MSG } from 'client/app/constants/constants';
import { CustomValidator } from 'client/app/helpers/custom-validator';
import { Router } from '@angular/router';
import {  mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { environment } from 'client/environments/environment';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  signUpForm : FormGroup;
  submitted  : boolean;
  isRegistered : boolean;
  formData: FormData;
  isImageSelected: boolean;
  response: any;
  SERVER_URL: string;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService) { }

  ngOnInit() {
    
    this.SERVER_URL = environment.APIEndPoint;
    this.submitted = this.isRegistered = this.isImageSelected = false;

    this.signUpForm = this.formBuilder.group({
      firstName : ['', Validators.required] ,
      lastName : ['', Validators.required] ,
      userName : ['', Validators.required] ,
      email : ['', Validators.compose([ Validators.required , Validators.pattern(EMAIL_PATTERN)]) ] ,
      password : ['' , Validators.compose([ 
                  Validators.required,
                  CustomValidator.patternValidator(/\d/, { hasNumber: true }) ,
                  CustomValidator.patternValidator(/[A-Z]/, { hasCapitalCase: true }),
                  CustomValidator.patternValidator(/[a-z]/, { hasLowerCase: true }),
                  Validators.minLength(5)
                ]) ],
    confirm_password: ['', Validators.compose([Validators.required])] ,
    profile_image : ['', Validators.required],
    avatar : [''],
    role : ['user']
    } , { validators : CustomValidator.passwordValidator});

    this.signUpForm.valueChanges.subscribe(result => {this.response = undefined; });
  }

  get f() { return this.signUpForm.controls; }

  onFileSelect(event){
   if (event.target.files.length > 0) {
      this.isImageSelected = true;
      const file = event.target.files[0];
      this.formData = new FormData();
      this.formData.append('avatar' , file);
      this.formData.append('email', this.signUpForm.get('email').value);
    }
  }
  onSubmit() {
    this.submitted = true;
    console.log(this.isImageSelected , this.signUpForm.value)
    if(this.signUpForm.invalid) 
      return;
    else if(!this.isImageSelected)
      return;
     
    console.log(this.isImageSelected , this.signUpForm.value)
      
    const fileUpload = this.authService.register('profile-image' , this.formData);    
    const register = fileUpload.pipe(
      mergeMap((response : any) => {
        console.log('profile-image Response', response);
        if(response.success) {
          this.signUpForm.get('avatar').setValue(response.filename);
          this.signUpForm.get('role').setValue('user');
          return this.authService.register('register', this.signUpForm.value);
        }
        else
          return of(null);
    }));
    
    register.subscribe(response => {
      console.log('Registration Response ', response);
            

      this.response = response;

      if(!this.response){
        this.response = {success : false, message : ERROR_MSG};
        return;
      }
      window.scrollTo(0 , 0);

      if(response.success) {
       
        setTimeout(() => {
          //this.router.navigateByUrl('/');
          this.signUpForm.reset();
        }, 5000);        
      }
    },
    error => {
      console.error("Registration response", error);
      
    });      
  }  


  isErrorField(field: string) {
    return this.response && !this.response.success && this.response.message.indexOf(field) > -1;
  }
}
