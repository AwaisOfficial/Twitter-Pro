import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../auth-service/auth-service.service';
import { Observable } from 'rxjs';
import { IUser } from 'client/app/interfaces';

@Injectable({
  providedIn: 'root'
})
export class RedirectGuardService implements CanActivate {
  constructor(
      private router: Router,
      private authService: AuthService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean {
    const user = <IUser>this.authService.userVal;
    if (user && user['user']) {      
      this.router.navigate(['/'+ user['user'].role]);
      return true;      
    }      
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
    return false;
  }
}
