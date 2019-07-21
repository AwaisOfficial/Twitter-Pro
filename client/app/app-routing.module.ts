import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuardService } from './services';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { TermsOfServiceComponent } from './components/terms-of-service/terms-of-service.component';

const routes: Routes = [
  { path : '' , component : HomeComponent, canActivate : [AuthGuardService]},
  { path : 'login', component: LoginComponent},
  
  { path : 'login/:oauth_token/:oauth_token_verifier', component: LoginComponent},
  { path : 'register', component: RegisterComponent},
  { path : 'forgot-password', component: ForgotPasswordComponent},
  { path : 'reset-password/:token', component: ResetPasswordComponent},
  { path : 'privacy-policy', component: PrivacyPolicyComponent},
  { path : 'terms-of-service', component: TermsOfServiceComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
