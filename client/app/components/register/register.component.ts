import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OperationsService } from 'client/app/services';
import { EMAIL_PATTERN } from 'client/app/constants/constants';
import { CustomValidator } from 'client/app/helpers/custom-validator';
import {  mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { AngularButtonLoaderService } from 'angular-button-loader';


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
              private btnLoaderService: AngularButtonLoaderService,
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
    if(this.signUpForm.invalid) 
      return;
    else if(!this.isImageSelected)
      return;
     
    this.btnLoaderService.displayLoader();  
    const fileUpload = this.operationsService.postOperations('profile-image' , this.formData);    
    const register = fileUpload.pipe(
      mergeMap((response : any) => {
        //console.log('Response', response);
        if(response.success) {
          this.signUpForm.get('avatar').setValue(response.filename);
          this.signUpForm.get('role').setValue('user');
          return this.operationsService.postOperations('register',this.signUpForm.value);
        }
        else
          return of(null);
    }));
    
    register.subscribe(response => {
      this.btnLoaderService.hideLoader();
      this.response = response;
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
      this.btnLoaderService.hideLoader();
    });      
  }  


  isErrorField(field: string) {
    return this.response && !this.response.success && this.response.message.indexOf(field) > -1;
  }
}
