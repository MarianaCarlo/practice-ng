import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  @Input() age: number; 
  @Output() mensaje = new EventEmitter();
  
  user: string = 'mario';

  constructor() { }

  ngOnInit() {
  }

  onClickSave() {
    this.mensaje.emit('HICISTE CLICK');
  }

}