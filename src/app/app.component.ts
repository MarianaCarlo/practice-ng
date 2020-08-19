import { Component, OnInit, OnDestroy } from '@angular/core';
import { from, fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'curso-angular';

  sw=true;

  alumnos = [
    {
      nombre: 'juan',
      apellido: 'gutierrez',
      habilitado: true,
      nacimiento: '18/08/95',
      voto: false
    },
    {
      nombre: 'juan',
      apellido: 'gutierrez',
      habilitado: false,
      nacimiento: '18/08/95',
      voto: false
    },
    {
      nombre: 'juan',
      apellido: 'gutierrez',
      habilitado: false,
      nacimiento: '18/08/95',
      voto: false
    }
  ]


ngOnInit() {
  
}

saveClickChild(event) {
  console.log('EVENT CHILD: ', event)
}

saveClickChild2(event) {
  console.log('EVENT CHILD: ', event)
}

ngOnDestroy(){

}

}


