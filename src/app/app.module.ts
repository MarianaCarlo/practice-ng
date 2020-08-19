import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { TareaComponent } from './tarea/tarea.component';
import { FormsModule } from '@angular/forms';
import { PruebaComponent } from './components/prueba/prueba.component';
import { CambiaridiomaPipe } from './cambiaridioma.pipe';
import { PersonaComponent } from './components/persona/persona.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TareaComponent,
    PruebaComponent,
    CambiaridiomaPipe,
    PersonaComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
