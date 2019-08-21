import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ModalComponent } from './modal/modal.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { SlideShowComponent } from './slide-show/slide-show.component';
import { PostsComponent } from './posts/posts.component';
import { CropImageComponent } from './crop-image/crop-image.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { SuggestedPeopleComponent } from './suggested-people/suggested-people.component';
import { CommentComponent } from './comment/comment.component';
import { CreateCommentComponent } from './create-comment/create-comment.component';

@NgModule({
  declarations: [  AlertComponent , FooterComponent, HeaderComponent , ModalComponent, ProfileComponent ,
                   SettingsComponent , SlideShowComponent, PostsComponent, CropImageComponent, SuggestedPeopleComponent, CommentComponent, CreateCommentComponent  ],
  imports: [
    CommonModule ,
    ImageCropperModule 
  ],
  entryComponents:[ ModalComponent , CropImageComponent , CreateCommentComponent],
  exports : [ AlertComponent , FooterComponent, HeaderComponent , ModalComponent, ProfileComponent , 
              SettingsComponent , SlideShowComponent , PostsComponent , CropImageComponent , SuggestedPeopleComponent  ]
})
export class SharedModule { }
