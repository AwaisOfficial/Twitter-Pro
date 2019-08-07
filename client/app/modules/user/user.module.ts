import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user.routing';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ HomeComponent ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ],
  exports : [ HomeComponent ],
  providers : [ ]
})
export class UserModule { }
