import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { User } from '../../models/users';
import { UserService } from '../../shared/services/user.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-regiszt',
  templateUrl: './regiszt.component.html',
  styleUrls: ['./regiszt.component.scss']
})

export class RegisztComponent implements OnInit {
  

  signUpForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    rePassword: new FormControl(''),
    name: new FormGroup({
      firstname: new FormControl(''),
      lastname: new FormControl('')
    })
  });

  constructor(private router: Router,private location: Location, private authService: AuthService, private userService: UserService,private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.signUpForm.value);
    this.authService.signup(this.signUpForm.get('email')?.value as string, this.signUpForm.get('password')?.value as  string).then(cred => {
      console.log(cred);
      const user: User = {
        id: cred.user?.uid as string,
        email: this.signUpForm.get('email')?.value as string,
        username: (this.signUpForm.get('email')?.value as string).split('@')[0],
        name: {
          firstname: this.signUpForm.get('name.firstname')?.value as string,
          lastname: this.signUpForm.get('name.lastname')?.value as string
        }
      };
      this.userService.create(user).then(_ => {
        console.log('User added successfully.');
        this.router.navigate(['/index']);
        this.snackBar.open('Sikeres bejelentkezés! Be is lépél!', 'Bezár', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'top'
        }); 
      }).catch(error => {
        console.error(error);
      })
    }).catch(error => {
      
      this.snackBar.open('Sikertelen regisztráció!\n Lehetséges okok: Foglalt email, nem egyezik a jelszó, hiányos adatok', 'Bezár', {
        duration: 4000,
        horizontalPosition: 'center',
        verticalPosition: 'top'
      }); 
      console.error(error);
    });
  }

  goBack() {
    this.location.back();
  }

}