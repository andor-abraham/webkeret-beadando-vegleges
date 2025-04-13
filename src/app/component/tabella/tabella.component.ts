import { Component } from '@angular/core';

@Component({
  selector: 'app-tabella',
  templateUrl: './tabella.component.html',
  styleUrls: ['./tabella.component.css']
})
export class TabellaComponent {
  isTableVisible: boolean = false;
  displayedColumns: string[] = ['no', 'logo', 'teamName', 'wins', 'draws', 'losses', 'gf', 'ga', 'points'];
  dataSource = [
    { no: 1, logo: '../../../../../assets/logo/kecskemet.jpg', teamName: 'Kecskemét', wins: 4, draws: 0, losses: 0, gf: 20, ga: 9, points: 12 },
    { no: 2, logo: '../../../../../assets/logo/szegedlogo.png', teamName: 'Szeged BYD Akadémia', wins: 2, draws: 0, losses: 2, gf: 9, ga: 4, points: 6 },
    { no: 3, logo: '../../../../../assets/logo/fradi.png', teamName: 'Ferencváros', wins: 2, draws: 0, losses: 2, gf: 2, ga: 2, points: 6 },
    { no: 4, logo: '../../../../../assets/logo/zte.png', teamName: 'Zalaegerszegi TE', wins: 2, draws: 0, losses: 2, gf: 10, ga: 12, points: 6 },
    { no: 5, logo: '../../../../../assets/logo/ujpest.jpg', teamName: 'Újpest FC', wins: 0, draws: 3, losses: 1, gf: 8, ga: 1, points: 3 },
    { no: 6, logo: '../../../../../assets/logo/puskas.png', teamName: 'Puskás Akadémia', wins: 1, draws: 0, losses: 3, gf: 2, ga: 8, points: 3 },
    { no: 7, logo: '../../../../../assets/logo/kisvarda.png', teamName: 'Kisvárda', wins: 0, draws: 2, losses: 2, gf: 20, ga: 1, points: 2 },
    { no: 8, logo: '../../../../../assets/logo/videoton.png', teamName: 'MOL Videoton', wins: 0, draws: 2, losses: 2, gf: 10, ga: 10, points: 2 },
    { no: 9, logo: '../../../../../assets/logo/mtk.png', teamName: 'MTK Budapest', wins: 0, draws: 1, losses: 3, gf: 6, ga: 2, points: 1 },
    { no: 10, logo: '../../../../../assets/logo/dvtk.jpg', teamName: 'DVTK', wins: 0, draws: 0, losses: 4, gf: 10, ga: 10, points: 0 },
    { no: 11, logo: '../../../../../assets/logo/paks.png', teamName: 'Paks FC', wins: 0, draws: 0, losses: 4, gf: 1, ga: 17, points: 0 }
];

}
