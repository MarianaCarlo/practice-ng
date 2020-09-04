
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
  {path: 'pages1', loadChildren: () => import('./pages1/pages1.module').then(m => m.Pages1Module)},
  {path: 'pagesTicket', loadChildren: () => import('./pages-ticket/pages-ticket.module').then(m => m.PagesTicketModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
