import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberRoutingModule } from './member-routing.module';
import { HomeComponent } from './home/home.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HomeComponent, CreatePostComponent],
  imports: [
    CommonModule ,
    MemberRoutingModule ,
    SharedModule
  ],
  entryComponents : [  ] ,
  exports : [ CreatePostComponent ]
})
export class MemberModule { }
