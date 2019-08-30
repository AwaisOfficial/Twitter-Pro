import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user.routing';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [ HomeComponent, ProfileComponent ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ],
  exports : [ HomeComponent ],
  providers : [ ]
})
export class UserModule { }
