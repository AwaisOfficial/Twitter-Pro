/* Modules */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule , ReactiveFormsModule } from '@angular/forms'
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ImageCropperModule } from 'ngx-image-cropper';
/* Custom Modules */
import { UserModule } from './modules/user/user.module';
import { AdminModule } from './modules/admin/admin.module';
import { MemberModule } from './modules/member/member.module';
import { SharedModule } from './modules/shared/shared.module';
/* Services */
import { OperationsService } from './services';
/* Components */
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { TermsOfServiceComponent } from './components/terms-of-service/terms-of-service.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    PrivacyPolicyComponent,
    TermsOfServiceComponent,
    AboutComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule ,
    NgbModule ,
    ImageCropperModule,

    AdminModule,
    MemberModule,
    UserModule,
    SharedModule
  ],
  entryComponents:[ ],
  providers: [ OperationsService , NgbActiveModal ],
  bootstrap: [AppComponent]
})
export class AppModule { }
