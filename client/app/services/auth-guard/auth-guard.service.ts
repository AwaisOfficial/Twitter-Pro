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
    const user = <IUser>this.authService.userVal;
    const role        = route.data.role;
    if (user && user['user']) {      
      if(role && role.indexOf(user['user'].role) > -1)
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
