import { Component } from '@angular/core';

@Component({
  selector: 'app-csapat',
  templateUrl: './csapat.component.html',
  styleUrl: './csapat.component.css'
})
export class CsapatComponent {
  email = 'szebydakademia@gmail.com';
  phone = '06-30-546-5498';
  address = 'Magyarország 6720 Szeged, Webkert utca. 6';
  creators = 'Tóth Norbert';
}
