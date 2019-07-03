import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuardService } from './services';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';

const routes: Routes = [
  { path : '' , component : HomeComponent, canActivate : [AuthGuardService]},
  { path : 'login', component: LoginComponent},
  { path : 'register', component: RegisterComponent},
  { path : 'forgot-password', component: ForgotPasswordComponent},
  { path : 'reset-password', component: ResetPasswordComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
