import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberRoutingModule } from './member-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [HomeComponent, ProfileComponent],
  imports: [
    CommonModule ,
    MemberRoutingModule ,
    SharedModule
  ],
  entryComponents : [  ] ,
  exports : [ ]
})
export class MemberModule { }
