import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from '../../shared/services/auth.service';
import { FakeLoadingService } from '../../shared/services/fake-loading.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],

})
export class LoginComponent implements OnInit, OnDestroy {

  email = new FormControl('');
  password = new FormControl('');

  loadingSubscription?: Subscription;
  loadingObservation?: Observable<boolean>;

  loading: boolean = false;

  constructor(private router: Router,private loadingService: FakeLoadingService, private authService: AuthService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  async login() {
    this.loading = true;

      this.authService.login(this.email.value as string, this.password.value as string).then(cred => {
        console.log(cred);
        this.router.navigate(['/index']);
        this.snackBar.open('Sikeres bejelentkezés!', 'Bezár', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'top'
        }); 
        this.loading = false;
      }).catch(error => {
        console.error(error);
        this.snackBar.open('Sikertelen bejelentkezés! Lehetséges okok: Rossz email vagy jelszó páros, Nincs regisztrálva', 'Bezár', {
          duration: 4000,
          horizontalPosition: 'center',
          verticalPosition: 'top'
        }); 
        this.loading = false;
      });
  }

  ngOnDestroy() {
    this.loadingSubscription?.unsubscribe();
  }

}