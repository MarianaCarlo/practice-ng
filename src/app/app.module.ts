import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatSliderModule} from '@angular/material/slider';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import { NgModule } from '@angular/core';
import { HomeModule } from './pages/home/home.module';
import { AdminModule } from './pages/admin/admin.module';
import { ListModule } from './pages/list/list.module';
import { LoginModule } from './login/login.module';
import { Pages1Module } from './pages1/pages1.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    MatSliderModule,
    MatIconModule,
    FormsModule,
    AppRoutingModule,
    Pages1Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
