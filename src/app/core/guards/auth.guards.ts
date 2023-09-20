import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable, tap } from "rxjs";
import { AuthenticationService } from "../services/authentication/auth.service";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authService: AuthenticationService
    ) { }
    canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.authService.isAuthenticated()
          .pipe(
            tap((b) => {
              if (!b) {
                this.router.navigate(['/login'], {queryParams: { returnUrl: state.url }});
              }
            })
          )
      }
}