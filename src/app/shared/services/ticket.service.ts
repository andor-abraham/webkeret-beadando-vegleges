// Import Angular and Firestore services
import { Injectable } from '@angular/core';
import { Firestore, collection, getDocs } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  constructor(private firestore: Firestore) {}

  async getTickets() {
    const ticketsCol = collection(this.firestore, 'tickets');
    const ticketSnapshot = await getDocs(ticketsCol);
    return ticketSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }
}
