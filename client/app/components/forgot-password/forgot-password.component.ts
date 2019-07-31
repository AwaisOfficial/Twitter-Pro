import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OperationsService } from 'client/app/services';
import { EMAIL_PATTERN } from 'client/app/constants/constants';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  resetPwdForm: FormGroup;
  response: any;

  constructor(private formBuilder: FormBuilder,
              private operationsService: OperationsService) { }

  ngOnInit() {
    
    this.resetPwdForm = this.formBuilder.group({
      userName: ['', Validators.compose ( [ Validators.required, Validators.pattern(EMAIL_PATTERN) ])]
    });

    this.resetPwdForm.valueChanges.subscribe(result => {
      this.response = undefined;
    });
  }

  get f(){ return this.resetPwdForm.controls; }

  onSubmit(){
    if(this.resetPwdForm.invalid) return;

    
    this.operationsService.postOperations('forgot-password', this.resetPwdForm.value).subscribe(( response : any) => {
      
      this.response = response;
      if(response.success) {
        setTimeout(() => { 
          this.resetPwdForm.reset();
          this.response = undefined;
        }, 5000);
      }
    },
    error => {
      console.error('Forgot Password Error', error)
      
    });
  }

}
