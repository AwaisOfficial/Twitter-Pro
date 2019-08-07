import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { AuthService } from 'client/app/services';
import { EMAIL_PATTERN, ERROR_MSG } from 'client/app/constants/constants';
import { CustomValidator } from 'client/app/helpers/custom-validator';
import {  mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'client/environments/environment';
import { CropImageComponent } from '../../modules/shared/crop-image/crop-image.component'

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
              private authService: AuthService,
              private modalService : NgbModal) { }

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
    confirmPassword: ['', Validators.compose([Validators.required])] ,
    profileImage : '',
    avatar : [''],
    role : ['user'],
    isCelebrity : false ,
    isAgreeToTerms : ['', [Validators.requiredTrue]]
    } , { validators : CustomValidator.passwordValidator});

    this.signUpForm.valueChanges.subscribe(result => {this.response = undefined; });
    this.signUpForm.get('isCelebrity').valueChanges.subscribe(isCelebrity => {
      const profileImage = this.signUpForm.get('profileImage');
      const role         = this.signUpForm.get('role');
      if(isCelebrity) {
        profileImage.setValidators([Validators.required]);
        role.setValue('member');
      }
      else {
        profileImage.setValidators(null);
        role.setValue('user');
      }
      profileImage.updateValueAndValidity();
      role.updateValueAndValidity();
    });
  }

  get f() { return this.signUpForm.controls; }

  onFileSelect(event) {

  //  if (event.target.files.length > 0) {
  //     this.isImageSelected = true;
  //     const file = event.target.files[0];
  //     this.formData = new FormData();
  //     this.formData.append('avatar' , file);
  //   }

    console.log(event.target.files[0]);
    const modalRef = this.modalService.open(CropImageComponent);
    modalRef.componentInstance.data = { title : 'Crop Image' ,  event : event};
    modalRef.result.then((result) => {
      //console.log(result);

      fetch(result).then(res => res.blob()).then(blob => {
        const file = new File([blob], event.target.files[0].name);
        console.log(file);
        this.formData = new FormData();
        this.formData.append('avatar' , file);
      });
    });
  }

  /* SUBMITTING FORM FOR REGISTRATION */
  onSubmit() {
    if(this.signUpForm.invalid) 
      return;
    
    this.submitted = true;  
    let register = null;
    if(this.signUpForm.get('profileImage').value != '')  {
    const fileUpload = this.authService.register('profile-image' , this.formData);    
      register = fileUpload.pipe(
        mergeMap((response : any) => {
          console.log('profile-image Response', response);
          if(response.success) {
            this.signUpForm.get('avatar').setValue(response.filename);
            return this.authService.register('register', this.signUpForm.value);
          }
          else
            return of(null);
      }));
    }
    else {
      this.signUpForm.get('avatar').setValue(null);
      register = this.authService.register('register', this.signUpForm.value);
    }
    
    register.subscribe(response => {

      console.log('Registration Response ', response);           
      this.submitted = false;
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
      this.submitted = false;
      console.error("Registration Error", error);
    });      
  }  

  isErrorField(field: string) {
    return this.response && !this.response.success && this.response.message.indexOf(field) > -1;
  }
}
