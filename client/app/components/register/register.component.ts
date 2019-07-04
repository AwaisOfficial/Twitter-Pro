import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OperationsService } from 'client/app/services';
import { EMAIL_PATTERN } from 'client/app/constants/constants';
import { CustomValidator } from 'client/app/helpers/custom-validator';
import { Router } from '@angular/router';
import {  mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  signUpForm : FormGroup;
  submitted  : boolean;
  isRegistered : boolean;
  formData: FormData;
  isImageSelected: boolean;
  response: any;


  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private operationsService: OperationsService) { }

  ngOnInit() {
    this.submitted = this.isRegistered = this.isImageSelected = false;

    this.signUpForm = this.formBuilder.group({
      first_name : ['', Validators.required] ,
      last_name : ['', Validators.required] ,
      user_name : ['', Validators.required] ,
      email : ['', Validators.compose([ Validators.required , Validators.pattern(EMAIL_PATTERN)]) ] ,
      password : ['' , Validators.compose([ 
                  Validators.required,
                  CustomValidator.patternValidator(/\d/, { hasNumber: true }) ,
                  CustomValidator.patternValidator(/[A-Z]/, { hasCapitalCase: true }),
                  CustomValidator.patternValidator(/[a-z]/, { hasLowerCase: true }),
                  // 6. Has a minimum length of 8 characters
                  Validators.minLength(5)
                      
                  ]) ],
    confirm_password: ['', Validators.compose([Validators.required])] ,
    profile_image : ['', Validators.required],
    avatar : [''],
    role : 'user'
    } , { validators : CustomValidator.passwordValidator});
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
    if(this.signUpForm.invalid) {
      return;
    }

    else if(!this.isImageSelected)
      return;
      
    const fileUpload = this.operationsService.postOperations('profile-image' , this.formData);    
    const register = fileUpload.pipe(
      mergeMap((response : any) => {
        console.log('Response', response);
        if(response.success) {
          this.signUpForm.get('avatar').setValue(response.filename);
          console.log('Updated Form', this.signUpForm.value);
          return this.operationsService.postOperations('register',this.signUpForm.value);
        }
        else
          return of(null);
    }));

    
    register.subscribe(response => {
      this.response = {};
      this.response = response;
      console.log('response' , this.response);
      if(response.success){
        setTimeout(() => {
          window.scroll(0 , 0);
          this.router.navigateByUrl('/login');
        }, 5000);        
      }
      else {
        console.log(this.response.message.indexOf('Email') > -1);
      }
    },
    error => console.error("Registration response", error));      
  }  

}
