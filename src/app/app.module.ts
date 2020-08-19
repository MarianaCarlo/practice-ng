import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { TareaComponent } from './tarea/tarea.component';
import { FormsModule } from '@angular/forms';
import { PruebaComponent } from './components/prueba/prueba.component';
import { CambiaridiomaPipe } from './cambiaridioma.pipe';
import { PersonaModule } from './modules/persona/persona.module';
import { ProductoModule } from './modules/producto/producto.module';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TareaComponent,
    PruebaComponent,
    CambiaridiomaPipe
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    PersonaModule,
    ProductoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
