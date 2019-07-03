import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OperationsService } from 'src/app/services';
import { EMAIL_PATTERN } from 'src/app/constants/constants';
import { Router } from '@angular/router';
import { AngularButtonLoaderService } from 'angular-button-loader';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  resetPwdForm: FormGroup;
  submitted: boolean;
  showMessage : boolean;
  response: any;

  constructor(private formBuilder: FormBuilder,
              private btnLoaderService: AngularButtonLoaderService,
              private operationsService: OperationsService) { }

  ngOnInit() {
    this.showMessage = this.submitted = false;
    this.resetPwdForm = this.formBuilder.group({
      user_name: ['', Validators.compose ( [ Validators.required, Validators.pattern(EMAIL_PATTERN) ])]
    })
  }

  get f(){ return this.resetPwdForm.controls; }

  onSubmit(){
    if(this.resetPwdForm.invalid) return;

    this.submitted = true;
    this.btnLoaderService.displayLoader();
    this.operationsService.postOperations('forgot-password', this.resetPwdForm.value).subscribe(( response : any) => {
      //console.log('Forgot Password Response', result);
      this.btnLoaderService.hideLoader();
      this.response = response;
      this.showMessage = true;
      if(response.success) {
        setTimeout(() => { 
          this.showMessage = false; 
          this.resetPwdForm.reset();
        }, 5000);
      }
    },
    error => {
      console.error('Forgot Password Error', error)
      this.btnLoaderService.hideLoader();
    });
  }

}
