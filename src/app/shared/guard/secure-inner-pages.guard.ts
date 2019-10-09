import { Injectable, NgZone } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from "../../shared/services/auth.service";
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class SecureInnerPagesGuard implements CanActivate {

    constructor(
        public authService: AuthService,
        public router: Router,
        private ngZone: NgZone
    ) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if (this.authService.isLoggedIn) {
            window.alert("You are not allowed to access this URL!");
            this.router.navigate(['sala'])
        }
        return true;
    }

}