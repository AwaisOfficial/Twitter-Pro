import { Injectable } from '@angular/core';
import { Router , CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth-service/auth-service.service';
import { IUser } from 'client/app/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(
      private router: Router,
      private authService: AuthService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean {
    const currentUser = <IUser>this.authService.userVal.user;
    const role        = route.data.role;
    if (currentUser) {      
      if(role && role.indexOf(currentUser.role) > -1)
        return true;
      else {
        this.router.navigate(['/not-found']);
        return false;
      }
    }      
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
    return false;
  }
}
