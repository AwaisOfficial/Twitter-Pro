/* Modules */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule , ReactiveFormsModule } from '@angular/forms'
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
/* Components */
import { AppComponent } from './app.component';

/* Services */
import { OperationsService } from './services';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { SlideShowComponent } from './components/shared/slide-show/slide-show.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { AlertComponent } from './components/shared/alert/alert.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { TermsOfServiceComponent } from './components/terms-of-service/terms-of-service.component';
import { AboutComponent } from './components/about/about.component';
import { ModalComponent } from './components/shared/modal/modal.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    SlideShowComponent,
    HeaderComponent,
    FooterComponent,
    AlertComponent,
    PrivacyPolicyComponent,
    TermsOfServiceComponent,
    AboutComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule ,
   // MDBBootstrapModule.forRoot(),
    NgbModule
  ],
  entryComponents:[ModalComponent],
  providers: [ OperationsService , NgbActiveModal ],
  bootstrap: [AppComponent]
})
export class AppModule { }
