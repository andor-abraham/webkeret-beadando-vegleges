import { Component } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',

  styleUrls: ['./index.component.css']
})


export class IndexComponent {
  email = 'ideneirj@gmail.com';
  phone = '06-30-123-1239';
  address = 'Magyarország 6720 Szeged, Webkert utca. 6';
  creators = 'Ábrahám Andor';
  textColor: string = '#000000';
  title = 'Használd a gombokat a cím színének változtatásához!';
}




