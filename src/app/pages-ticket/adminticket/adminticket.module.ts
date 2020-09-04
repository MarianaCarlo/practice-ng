import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminticketRoutingModule } from './adminticket-routing.module';
import { AdminticketComponent } from './adminticket/adminticket.component';


@NgModule({
  declarations: [AdminticketComponent],
  imports: [
    CommonModule,
    AdminticketRoutingModule
  ]
})
export class AdminticketModule { }
