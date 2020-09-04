import { PagesTicketComponent } from './pages-ticket/pages-ticket.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: PagesTicketComponent, children: [
    {path: '', redirectTo: 'homeTicket', pathMatch: 'full'},
    {path: 'homeTicket', loadChildren: () => import('./hometicket/hometicket.module').then(m => m.HometicketModule)},
    {path: 'adminTicket', loadChildren: () => import('./adminticket/adminticket.module').then(m => m.AdminticketModule)}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesTicketRoutingModule { }
