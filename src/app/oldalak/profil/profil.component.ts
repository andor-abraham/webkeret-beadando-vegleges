import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  user: any = null;
  uname: string = '';
  email: string = '';
  fullname: string = '';
  idki: string = '';

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getCurrentUser().subscribe(data => {
      if (data) {
        this.user = data;        
        this.uname = data.username || 'Nincs username';
        this.email = data?.email ||'Nincs email';
        this.fullname = data.name.firstname+' '+data.name.lastname;
        this.idki = data.id;
      }
    }, error => {
      console.error("Failed to fetch user data:", error);
    });
  }
}
