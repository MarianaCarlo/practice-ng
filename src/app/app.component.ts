import { Component, OnInit, OnDestroy } from '@angular/core';
import { from, fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'curso-angular';
  contador1:number = 0;
  contador2:number = 0;
  contador3:number = 0;

  aux=5;
  auxColor='red';
  auxClass=true;
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
  i = 0;
  j = 0;
  k = 0;
  ngDoCheck(){
    this.i=0;
    for(let persona of this.alumnos){
      if(persona.voto){
        this.i++;
      }
      //console.log(this.i);
    }

    this.j=0;
    for(let persona of this.alumnos){
      if(persona.habilitado){
        this.j++;
      }
      //console.log(this.j);
    }

    this.k=0;
    for(let persona of this.alumnos){
      if(!persona.habilitado){
        this.k++;
      }
      console.log(this.k);
    }

    
  }

persons = ['maria','antonio','migel', 'lupe'];

people = [
  {
  name: 'juan',
  lastName: 'gutierrez',
  age: 40,
  enable: true,
  },
  {
name: 'maria',
  lastName: 'gutierrez',
  age: 40,
  enable: true,
  },
  {
    name: 'antionio',
  lastName: 'gutierrez',
  age: 40,
  enable: false,
  }
]


ngOnInit() {
  this.alumnos.forEach(function (value){
    if(value.voto) {
      this.contador1++;
      console.log('contador 1: ',this.contador1);
    }
    if(value.habilitado) {
      //this.contador2++;
      //console.log('contador 2: ',this.contador2);
    }
    if(!value.habilitado) {
      //this.contador3++;
      //console.log('contador 3: ',this.contador3);
    }
    
  })
  console.log('alumnos',this.alumnos[0]);
}

saveClickChild(event) {
  console.log('EVENT CHILD: ', event)
}

saveClickChild2(event) {
  console.log('EVENT CHILD: ', event)
}


}


