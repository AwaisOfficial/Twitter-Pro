import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Commons, CustomValidator } from 'client/app/helpers';
import { USER_INFO, ERROR_MSG, PROFILE_UPDATE_MSG, PASSWORD_UPDATE_MSG } from 'client/app/constants/constants';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CropImageComponent } from '../crop-image/crop-image.component';
import { OperationsService, AuthService } from 'client/app/services';
import { mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  profile : any;
  commons : Commons;
  submitted : boolean = false; 
  profileFormData : FormData;
  profileForm : FormGroup;
  securityForm: FormGroup;

  photos : any = { profilePhoto :   { file : '' , url : ''} , coverPhoto : { file : '' , url : ''}};
  response : any;

  @ViewChild('coverPhotoContainer', { static : true }) coverPhotoContainer: ElementRef;


  constructor(private router: Router,
              private formBuilder : FormBuilder ,
              private modalService: NgbModal,
              private authService: AuthService,
              private operationsService : OperationsService) { }

  ngOnInit() {
    this.commons = new Commons();
    this.profileFormData = new FormData();
    this.profile = history.state.data.profile;
    this.initProfileForm();
    this.initSecurityForm();

  }

  initProfileForm() {
    this.profileForm = this.formBuilder.group({
      about : this.profile.about ? this.profile.about : '',
      avatar   : this.profile.avatar ? this.profile.avatar : '',
      birthDate : this.profile.birthDate ? this.profile.birthDate : '',
      coverPhoto : this.profile.coverPhoto ? this.profile.coverPhoto : null ,
      firstName : this.profile.firstName , 
      _id      : this.profile._id,
      lastName : this.profile.lastName , 
      userName : this.profile.userName ,
      location : this.formBuilder.group({
        address : this.profile.location ?  ( this.profile.location.address ?  this.profile.location.address : '' ) : '',
        city    : this.profile.location ?  ( this.profile.location.city    ?  this.profile.location.city    : '' ) : '', 
        country : this.profile.location ?  ( this.profile.location.country ?  this.profile.location.country : '' ) : '', 
      }),
      mobileNumber : this.formBuilder.group({
        countryCode : this.profile.mobileNumber   ? ( this.profile.mobileNumber.countryCode ? this.profile.mobileNumber.countryCode : '') : '' ,
        number : this.profile.mobileNumber.number ? ( this.profile.mobileNumber.number      ? this.profile.mobileNumber.number      : '') : '' ,
      })
    });
  }

  initSecurityForm(){
    this.securityForm = this.formBuilder.group({
      _id      : this.profile._id,
      password : ['' , Validators.compose([ 
        Validators.required,
        CustomValidator.patternValidator(/\d/, { hasNumber: true }) ,
        CustomValidator.patternValidator(/[A-Z]/, { hasCapitalCase: true }),
        CustomValidator.patternValidator(/[a-z]/, { hasLowerCase: true }),
        Validators.minLength(5)
      ]) ],
      confirmPassword: ['', Validators.compose([Validators.required])]
    }, { validators : CustomValidator.passwordValidator});
  }

  onThemeChange(event){
    localStorage.removeItem('Theme');
    localStorage.setItem('Theme', event.target.value);
    const bodyClasses = document.body.classList;
    document.body.classList.remove(bodyClasses.value);
    bodyClasses.add(event.target.value);
  }

  get securityF() { return this.securityForm.controls; }

  get currentTheme(){
    const theme = localStorage.getItem('Theme');
    return theme ? theme : 'white-theme';
  }

  openAttachment(elementId : string) {
    document.getElementById(elementId).click();
  }

  onImageChange(element: string , event : any) { 
    const modalRef = this.modalService.open(CropImageComponent);
    modalRef.componentInstance.data = { title : 'Crop Image' ,  event : event , image : element == 'profile-photo' ? 'profile' : 'cover' , width : this.coverPhotoContainer.nativeElement.offsetWidth};
    modalRef.result.then((result) => {
      if(element == 'profile-photo')
        this.photos.profilePhoto.url = result;
      else
        this.photos.coverPhoto.url   = result;
      fetch(result).then(res => res.blob()).then(blob => {
        const file = new File([blob], event.target.files[0].name);
        if(element == 'profile-photo')
          this.photos.profilePhoto.file = file;
        else
          this.photos.coverPhoto.file   = file;
      });
    });
  }

  getCoverPhoto(){
    const imageUrl = ( this.photos.coverPhoto && this.photos.coverPhoto.url ) ? this.photos.coverPhoto.url : ( ( this.profile && this.profile.coverPhoto ) ? this.commons.getFilePath(this.profile.coverPhoto) :   '/assets/3.jpg') ; 
    return 'url("'+imageUrl+'") top center no-repeat';
  }
  
  updateProfile() {   
    this.submitted = true;
    let updateProfile = null;
    if(this.photos.profilePhoto.url != '' || this.photos.coverPhoto.url != '')  {
    const form = new FormData();
    if(this.photos.profilePhoto != '')
      form.append('postFiles', this.photos.profilePhoto.file);
    if(this.photos.coverPhoto != '')
      form.append('postFiles', this.photos.coverPhoto.file);  
    const fileUpload = this.operationsService.postOperations('post-images' , form);    
    updateProfile = fileUpload.pipe(
        mergeMap((response : any) => {
          if(response.success) {
            if(this.photos.profilePhoto.url != '')
              this.profileForm.get('avatar').setValue(response.files[0].filename);
            if(this.photos.coverPhoto.url != '')
              this.profileForm.get('coverPhoto').setValue(response.files[1].filename);
            return this.operationsService.postOperations('update-profile', this.profileForm.value);
          }
          else
            return of(null);
      }));
    }
    else {
      updateProfile = this.operationsService.postOperations('update-profile', this.profileForm.value);
    }    
    //console.log('Form' , this.profileForm.value);
    updateProfile.subscribe( (response : any) => {
      this.submitted = false;
      window.scrollTo(0 , 0);
      if(response.success){
        this.response = PROFILE_UPDATE_MSG;
        this.authService.userSubject.next(response.response);
        this.authService.user = response.response;
        this.response = { success : true , message : PROFILE_UPDATE_MSG };
      }
      else
        this.response = { success : false , message : ERROR_MSG };

      setTimeout(()=> {
        this.response = null;
      }, 3000);
    },
    error => {
      this.submitted = false;
      console.error("Profile Update Error", error);
    });      
  }  

  updatePassword(){
    this.submitted = true;
    const update = this.operationsService.postOperations('update-password', this.securityForm.value);
    update.subscribe((response : any) => {
      console.log('Password Update Result', response);
      this.submitted = false;
      if(response.success) {
        this.securityForm.reset();
        this.response = { success : true  , message : PASSWORD_UPDATE_MSG };
      }
      else
        this.response = { success : false , message : ERROR_MSG };
      setTimeout(()=> {
        this.response = null;
      }, 3000);
    },
    error => {
      this.submitted = false;
      console.error("Password Update Error", error);
    });
  }


  goToPreviousUrl(){
    this.router.navigate(['/profile'], { state: { data: { profile : this.profile } } });
  }
}
