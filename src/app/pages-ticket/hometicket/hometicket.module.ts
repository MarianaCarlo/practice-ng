import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HometicketRoutingModule } from './hometicket-routing.module';
import { HometicketComponent } from './hometicket/hometicket.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [HometicketComponent],
  imports: [
    CommonModule,
    HometicketRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class HometicketModule { }
