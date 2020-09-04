import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesTicketRoutingModule } from './pages-ticket-routing.module';
import { PagesTicketComponent } from './pages-ticket/pages-ticket.component';


@NgModule({
  declarations: [
    PagesTicketComponent
  ],
  imports: [
    CommonModule,
    PagesTicketRoutingModule
  ]
})
export class PagesTicketModule { }
