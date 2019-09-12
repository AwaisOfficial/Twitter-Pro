import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { OperationsService } from 'client/app/services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { ERROR_MSG, POST_CREATION_MSG } from 'client/app/constants/constants';
import { ModalComponent } from 'client/app/modules/shared/modal/modal.component';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit  {

  @Input('data') data : any;
  @Input('type') type : string;
  @Output() onPostCreation = new EventEmitter<any>();
  @ViewChild('postText', {static: false}) postText : ElementRef;
  
  files: any =  { images : []  , videos : [] ,  imagesCount : 0 , videosCount : 0};
  form : FormGroup; 
  postCreationResponse : any ;  
  
  constructor(private operationsService: OperationsService , 
              private formBuilder: FormBuilder ,
              private modalService: NgbModal) { }

  ngOnInit() { }

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
    if(!this.postText.nativeElement.value) {
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

      if(result.success) {

        this.form = this.formBuilder.group({
          role   : 'member',
          text   : this.postText.nativeElement.value,
          images : this.formBuilder.array([ ]),
          video  : this.files.videos.length > 0 ? this.files.videos[0].name : null ,
          inReplyToPostId : this.data.post ? this.data.post._id : null,
          inReplyToUserId : this.data.post ? this.data.post.user._id : null,
        });

        this.addImages(result.files);
        return  this.operationsService.postOperations('create-post', this.form.value);
      }
      else
        return of(null);
    }));

    createRequest.subscribe(result => {
      console.log('Post Creation Response', result);
      this.postCreationResponse = {}
      if(result.success) {
        this.postCreationResponse.success = true;
        this.postCreationResponse.message = POST_CREATION_MSG;
        this.form.reset();
        this.onPostCreation.emit({post: this.data.post ? result.response[1] : result.response[0] });
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
  

  clearInputFields(){
    this.files.imagesCount = this.files.videosCount = 0;
    this.files.images = this.files.videos = [];
    this.postText.nativeElement.value = '';
    setTimeout(() => { this.postCreationResponse = null }, 3000);
  }

  createPostMargin(): string {
    return this.type == 'post' ? '90' : '0';
  }

}
