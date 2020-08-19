import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TareaComponent } from './tarea/tarea.component';
import { FormsModule } from '@angular/forms';
import { PruebaComponent } from './components/prueba/prueba.component';
import { CambiaridiomaPipe } from './cambiaridioma.pipe';
import { PersonaModule } from './modules/persona/persona.module';
import { ProductoModule } from './modules/producto/producto.module';
import { AdminModule } from './modules/admin/admin.module';
import { UserModule } from './modules/user/user.module';
import { PipemarianaPipe } from './pipes/pipemariana.pipe';
import { SquarePipe } from './pipes/square.pipe';
import { PurePipe } from './pipes/pure.pipe';
import { ImpurePipe } from './pipes/impure.pipe';
import { NgColorDirective } from './directives/ng-color.directive';
import { TestComponent } from './components/test/test.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TareaComponent,
    PruebaComponent,
    CambiaridiomaPipe,
    PipemarianaPipe,
    SquarePipe,
    PurePipe,
    ImpurePipe,
    NgColorDirective
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    PersonaModule,
    ProductoModule,
    AdminModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
