import { Injectable } from '@angular/core';
import { Router , CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth-service/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(
      private router: Router,
      private authService: AuthService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.userVal) {
      console.log(this.authService.userVal)
      return true;
    }
      
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
    return false;
  }
}
