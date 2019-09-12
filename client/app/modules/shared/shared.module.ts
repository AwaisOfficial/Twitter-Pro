import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
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
import { CreatePostComponent } from './create-post/create-post.component';
import { ShowMemberProfileComponent } from './show-member-profile/show-member-profile.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ AlertComponent , FooterComponent, HeaderComponent , ModalComponent, ProfileComponent ,
                  SettingsComponent , SlideShowComponent, PostsComponent, CropImageComponent, SuggestedPeopleComponent,
                  CommentComponent, CreateCommentComponent, CreatePostComponent, ShowMemberProfileComponent, SubscribeComponent  ],
  imports: [
    CommonModule ,
    ImageCropperModule ,
    FormsModule, 
    ReactiveFormsModule ,
    DatePickerModule
  ],
  entryComponents:[ ModalComponent , CropImageComponent , CreateCommentComponent , CreatePostComponent ],
  exports : [ AlertComponent , FooterComponent, HeaderComponent , ModalComponent, ProfileComponent , 
              SettingsComponent , SlideShowComponent , PostsComponent , CropImageComponent , 
              SuggestedPeopleComponent , CreatePostComponent , SubscribeComponent ]
})
export class SharedModule { }
