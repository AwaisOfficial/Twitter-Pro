import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;
  submitted : boolean;
  returnUrl : string;
  

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private authService: AuthService) { }

  ngOnInit() {
    this.submitted = false;

    this.loginForm = this.formBuilder.group({
      user_name : ['', Validators.required] ,
      password : ['' , Validators.required]
    });

    this.authService.logOut();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if(this.loginForm.invalid) {
      return;
    }
    this.authService.login(this.loginForm.value).subscribe(user => {
      //console.log('User', user);
      if(user) 
        this.router.navigate([this.returnUrl]);
    },
    error => {
      console.error('Error', error);
    });
  }

  handlError(error: any){    
  }

}
