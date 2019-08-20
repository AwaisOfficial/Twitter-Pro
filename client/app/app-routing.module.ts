import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuardService, RedirectGuardService } from './services';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { TermsOfServiceComponent } from './components/terms-of-service/terms-of-service.component';
import { SettingsComponent } from './modules/shared/settings/settings.component';
import { ProfileComponent } from './modules/shared/profile/profile.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path : ''  , redirectTo : '', pathMatch: 'full' , canActivate : [ RedirectGuardService ] },
  { path : 'login', component : LoginComponent },  
  { path : 'login/:oauth_token/:oauth_token_verifier', component: LoginComponent},
  { path : 'register', component: RegisterComponent},
  { path : 'forgot-password', component: ForgotPasswordComponent},
  { path : 'reset-password/:token', component: ResetPasswordComponent},
  { path : 'privacy-policy', component: PrivacyPolicyComponent},
  { path : 'terms-of-service', component: TermsOfServiceComponent},
  { path : 'settings', component: SettingsComponent},
  { path : 'profile', component: ProfileComponent , canActivate : [AuthGuardService]},
  
  { path : 'admin'  , loadChildren : () => import('./modules/admin/admin.module').then(mod => mod.AdminModule) , canActivate : [AuthGuardService] , data : { role : 'admin'}} ,
  { path : 'member' , loadChildren : () => import('./modules/member/member.module').then(mod => mod.MemberModule),  canActivate : [AuthGuardService] , data : { role : 'member'}} ,
  { path : 'user'   , loadChildren : () => import('./modules/user/user.module').then(mod => mod.UserModule) , canActivate : [AuthGuardService] , data : { role : 'user'}} ,
  
  { path : 'not-found' , component : NotFoundComponent },
  { path : '**' , redirectTo : 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
