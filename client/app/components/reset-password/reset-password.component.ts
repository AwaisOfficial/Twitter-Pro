import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OperationsService } from 'client/app/services';

import { ActivatedRoute } from '@angular/router';
import { CustomValidator } from 'client/app/helpers/custom-validator';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  resetPwdForm: FormGroup;
  response: any;

  constructor(private formBuilder: FormBuilder,
              private operationsService: OperationsService ,
              private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.resetPwdForm = this.formBuilder.group({
      password : ['' , Validators.compose([ 
        Validators.required,
        CustomValidator.patternValidator(/\d/, { hasNumber: true }) ,
        CustomValidator.patternValidator(/[A-Z]/, { hasCapitalCase: true }),
        CustomValidator.patternValidator(/[a-z]/, { hasLowerCase: true }),
        Validators.minLength(5)
      ]) ],
      confirm_password: ['', Validators.compose([Validators.required])] ,
      token : ['']

    } , { validators : CustomValidator.passwordValidator});

    const token = this.activeRoute.snapshot.paramMap.get("token")
    this.resetPwdForm.patchValue({token: token});

    this.resetPwdForm.valueChanges.subscribe(result => {
      this.response = undefined;
    });
  }

  get f(){ return this.resetPwdForm.controls; }

  onSubmit(){
    if(this.resetPwdForm.invalid) return;

    

    console.log('Form', this.resetPwdForm.value);
    
    this.operationsService.postOperations('reset-password', this.resetPwdForm.value).subscribe(result => {
      
      this.response = result;
      setTimeout(() => {
        this.resetPwdForm.get('password').setValue('');
        this.resetPwdForm.get('confirm_password').setValue('');
        
      }, 4000);

    },
    error => console.error('Forgot Password Error', error));
  }


}
