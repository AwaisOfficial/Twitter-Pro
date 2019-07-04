import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OperationsService } from 'client/app/services';
import { AngularButtonLoaderService } from 'angular-button-loader';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  resetPwdForm: FormGroup;
  submitted: boolean;

  constructor(private formBuilder: FormBuilder,
              private operationsService: OperationsService ,
              private btnLoaderService: AngularButtonLoaderService) { }

  ngOnInit() {
    this.submitted = true;
    this.resetPwdForm = this.formBuilder.group({
      email: ['',  Validators.required ] 
    })
  }

  get f(){ return this.resetPwdForm.controls; }

  onSubmit(){
    if(this.resetPwdForm.invalid) return;

    this.btnLoaderService.displayLoader();
    this.submitted = true;

    this.operationsService.postOperations('reset-password', this.resetPwdForm.value).subscribe(result => {
      this.btnLoaderService.hideLoader();
      console.log('Reset Password Response', result);
    },
    error => console.error('Forgot Password Error', error));
  }


}
