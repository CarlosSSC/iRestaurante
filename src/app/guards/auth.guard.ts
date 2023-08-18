import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard {
    constructor(
        private router: Router,
        private authService: AuthService,
    ) { }

    canActivate() {
      return this.authService.getLogin().then(res => {
        if (res) return true;

        this.router.navigate(['/login'], {replaceUrl: true});
        return false;
      })
  }
}