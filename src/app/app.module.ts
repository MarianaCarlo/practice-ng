import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TareaComponent } from './tarea/tarea.component';
import { FormsModule } from '@angular/forms';
import { NgColorDirective } from './directives/ng-color.directive';
import { NgFocusDirective } from './directives/ng-focus.directive';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    NgColorDirective,
    NgFocusDirective,
    HomeComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
