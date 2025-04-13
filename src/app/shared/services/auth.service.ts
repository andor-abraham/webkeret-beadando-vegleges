import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { BehaviorSubject, Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = true;

  constructor(private auth: AngularFireAuth,private snackBar: MatSnackBar) { }

  login(email: string, password: string){
    
    return this.auth.signInWithEmailAndPassword(email, password);

  }
  signup(email: string, password: string) {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  isUserLoggedIn() {
    this.isLoggedIn = true;
    return this.auth.user;

  }

  logout() {
    this.snackBar.open('Ki lett jelentkeztetve a rendszerből!', 'Bezár', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    }); 
    this.isLoggedIn = false;
    return this.auth.signOut();
  }
  getLoginStatus() {
    return this.isLoggedIn;
  }

  
  
}
