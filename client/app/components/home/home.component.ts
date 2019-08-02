import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { OperationsService } from 'client/app/services';
import { of } from 'rxjs';
import { mergeMap} from 'rxjs/operators';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../shared/modal/modal.component';
import { environment } from 'client/environments/environment';
import { ERROR_MSG, POST_CREATION_MSG } from 'client/app/constants/constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit  {

  files: any =  { images : []  , videos : [] ,  imagesCount : 0 , videosCount : 0};
  form : FormGroup;
  posts: Array<any>; 
  postCreationResponse : any ;
  SERVER_URL : string;

  @ViewChild('postText', {static: false}) postText : ElementRef;
  
  constructor(private operationsService: OperationsService , 
              private formBuilder: FormBuilder ,
              private modalService: NgbModal) { }

  ngOnInit() { 

    // let data = { email: { value : '' , type : 'control' , required : true , custom_validation : CustomValidator.patternValidator } ,
    //              password: { value : '' , type : 'control' , required : true , custom_validation : CustomValidator.passwordValidator }
    //            }
    // new CustomFormBuilder().initForm(data , this.formBuilder);
    this.SERVER_URL = environment.APIEndPoint;
    this.getPosts();
  }

  getPosts()  {
    this.operationsService.getOperations('get-posts').subscribe((response : any) => {
      
      if(response.success){
        console.log("Posts", response.posts);
        this.posts = response.posts;
      }
    },
    error => console.error("Posts Fetching Error ", error));

    //return this.operationsService.getOperations('get-posts');
    // posts.subscribe(result => {
    //   console.log(result);
    // });
    
  }

  addImage(image? : any){
    return new FormControl(image ? image : null, [Validators.required] );
  }

  onImagesSelection(event : any, type: string){    
    if(!event || !event.target || !event.target.files) return;
    if(type == 'images'){
      this.files.images      = [];
      this.files.imagesCount = 0;
    }
    else {
      this.files.videos      = [];
      this.files.videosCount = 0;
    }
    Object.values(event.target.files).forEach((file : any ) => {
      if(type == 'images'){
        this.files.images.push(file);       
      }
      else
        this.files.videos.push(file);
    });
    this.files.imagesCount = this.totalFiles('images');
    this.files.videosCount = this.totalFiles('videos');
  }

  totalFiles(type: string) : any {
    if(!this.files || !this.files[type] || this.files[type].length == 0) return 0;    
    const videoFiles = this.files[type].filter(file => {
      if(type == 'images')
        return ['image/png', 'image/jpg', 'image/jpeg' , 'image/gif'].indexOf(file.type) > -1 ? true : false ; 
      else
        return ['video/mp4', 'video/mkv'].indexOf(file.type) > -1 ? true : false;
    });
    return videoFiles.length;
  }

  addImages(images : Array<any>) {
    //const formImages = this.formImages;
    for (let i = 0; i < images.length; i++) {      
      // images.push(new FormControl(this.files.images[i].name));
      if(images[i].mimetype.indexOf('video') > -1)
         this.form.get('video').setValue(images[i]);
      else
        this.formImages.push ( this.addImage( images[i] ) );
    }
  }

  /* CREATING POST */
  createPost() {
    if(!this.postText.nativeElement.value){
      const modalRef = this.modalService.open(ModalComponent);
      modalRef.componentInstance.data = { title : 'Create Post' , content : 'Please enter some text.' , type : 'alert'};
      modalRef.result.then((result) => {console.log(result);});
      return;
    }

    if(this.files.videos.length > 0 )
      this.files.images.push(this.files.videos[0]);
    
    let formData = new FormData();    
    for (var i = 0; i < this.files.images.length; i++) {
      formData.append('postFiles', this.files.images[i] );
    }    
    const uploadImages  = this.operationsService.postOperations('post-images', formData);
    const createRequest = uploadImages.pipe(
      mergeMap(result => {

      //console.log('Files Upload Response', result);

      if(result.success) {

        this.form = this.formBuilder.group({
          role : 'member',
          text : this.postText.nativeElement.value,
          images : this.formBuilder.array([ ]),
          video : this.files.videos.length > 0 ? this.files.videos[0].name : null
        });

        this.addImages(result.files);

        return  this.operationsService.postOperations('create-post', this.form.value);
      }
      else
        return of(null);
    }));

    createRequest.subscribe(result => {
      this.postCreationResponse = {}
      if(result.success){
        this.postCreationResponse.success = true;
        this.postCreationResponse.message = POST_CREATION_MSG;
        this.form.reset();
        this.posts.splice(0, 0 , result.post);
        this.clearInputFields();
      }
      else {
        this.postCreationResponse.success = false;
        this.postCreationResponse.message = ERROR_MSG;
      }
    }, 
    error => console.error('Create Request Error',error));
  }

  get formImages() : FormArray { return this.form.get('images') as FormArray; }
  
  getFilePath(fileName: string){
    return this.SERVER_URL + 'files/' + fileName;
  }

  clearInputFields(){
    this.files.imagesCount = this.files.videosCount = 0;
    this.postText.nativeElement.value = '';
    setTimeout(() => { this.postCreationResponse = null }, 3000);
  }

}
