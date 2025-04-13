import { Injectable } from '@angular/core';
import { Player } from '../../models/player.model';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private players: Player[] = [
    { id: 1, name: 'Szappanos Péter', number: 1, position: 'Kapus', image: '../../../assets/jatekosok/szappanos.png' },
    { id: 2, name: 'Beronja Zoran', number: 4, position: 'Bal hátvéd', image: '../../../assets/jatekosok/beronja.png' },
    { id: 3, name: 'Marcelo', number: 5, position: 'Jobb Hátvéd', image: '../../../assets/jatekosok/marcelo.png' },
    { id: 8, name: 'Willi Orban', number: 4, position: 'Középső védő', image: '../../../assets/jatekosok/orban.png' },
    { id: 4, name: 'Dayot Upamecano', number: 2, position: 'Középső védő', image: '../../../assets/jatekosok/upamecano.png' },
    { id: 5, name: 'Nagy Ádám', number: 22, position: 'Védekező Középpályás', image: '../../../assets/jatekosok/nagyadam.png' },
    { id: 6, name: 'Sigér Dávid', number: 15, position: 'Támadó Középpályás', image: '../../../assets/jatekosok/siger.png' },
    { id: 7, name: 'Márkvárt Dávid', number: 76, position: 'Középső Középpályás', image: '../../../assets/jatekosok/markvart.png' },
    { id: 9, name: 'Óvári Zsolt', number: 7, position: 'Jobb szélső', image: '../../../assets/jatekosok/ovari.png' },
    { id: 10, name: 'Wiu Lei', number: 40, position: 'Bal szélső', image: '../../../assets/jatekosok/wiulei.png' },
    { id: 11, name: 'Böde Dániel', number: 10, position: 'Támadó', image: '../../../assets/jatekosok/bode.png' },
    { id: 12, name: 'Jose Mourinho', number: 99, position: 'Edző', image: '../../../assets/jatekosok/mourinho.png' }
    
  ];

  constructor() { }

  getPlayers(): Player[] {
    return this.players;
  }
}
