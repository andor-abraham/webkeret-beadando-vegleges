import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar'; 
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(private router: Router,
    private snackBar: MatSnackBar){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      const user = JSON.parse(localStorage.getItem('user') as string);
      if (user) {
        
        return true;
      }
      this.router.navigate(['/login']);
        this.snackBar.open('Kérjük, jelentkezzen be a folytatáshoz!', 'OK', {
        duration: 3000
      });
      return false;
  }
  
}



