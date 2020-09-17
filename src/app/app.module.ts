import { reducers } from './core/index';
import { metaReducers } from './core/meta';
import { environment } from './../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AuthService } from './services/auth.service';

import { AuthGuard } from './guards/auth.guard';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatSliderModule} from '@angular/material/slider';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import { NgModule } from '@angular/core';
import { Pages1Module } from './pages1/pages1.module';
import { PagesTicketModule } from './pages-ticket/pages-ticket.module';
import { HometicketModule } from './pages-ticket/hometicket/hometicket.module';
import { AdminticketModule } from './pages-ticket/adminticket/adminticket.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BrowserModule } from '@angular/platform-browser';

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
    Pages1Module,
    PagesTicketModule,
    HometicketModule,
    AdminticketModule,
    HttpClientModule,

    StoreModule.forRoot(reducers, {metaReducers}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({name: 'Angular Course', logOnly: environment.production})
  ],
  providers: [
    AuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
