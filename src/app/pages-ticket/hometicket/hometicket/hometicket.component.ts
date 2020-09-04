import { TicketService } from './../../../services/ticket.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hometicket',
  templateUrl: './hometicket.component.html',
  styleUrls: ['./hometicket.component.scss']
})
export class HometicketComponent implements OnInit {

  tickets = [];
  nacional = [];
  internacional =[];

  constructor(private ticketService: TicketService) { }

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): void{
    this.ticketService.getTickets().subscribe(res => {
      console.log('respuesta ', res);
      console.log('respuesta ', Object.entries(res));

      Object.entries(res).map(p => this.tickets.push(p[1]));
      this.nacional = this.tickets.filter(s => s.type === 'nacional');
      this.internacional = this.tickets.filter(s => s.type === 'internacional');

    });
    console.log('tickets: ', this.tickets);

  }


}
