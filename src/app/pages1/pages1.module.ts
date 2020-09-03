import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Pages1RoutingModule } from './pages1-routing.module';
import { Pages1Component } from './pages1/pages1.component';


@NgModule({
  declarations: [Pages1Component],
  imports: [
    CommonModule,
    Pages1RoutingModule
  ]
})
export class Pages1Module { }
