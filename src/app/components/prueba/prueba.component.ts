import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {
  @Input() nombre:string;
  @Input() apellido:string;
  @Input() habilitado:any;
  @Input() nacimiento:string;

  constructor() { }

  ngOnInit() {
  }

}