import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit, OnChanges {

  @Input() age: number; 
  @Output() mensaje = new EventEmitter();
  
  user: string = 'mario';

  constructor() { }

  //@Input() name:string;
  _intermediaria:string;
  @Input()
  get name(){
    return this._intermediaria;
  }
  set name(name:string){
    this._intermediaria = 'aaaaaaaaa' + name;
  }

  @Input() lastName;

  ngOnChanges(changes: SimpleChange){
    
    if(changes && changes.lastName && changes.lastName.currentValue){
        console.log("on changes", changes.lastName.currentValue);
        const aux = "input aaaaa" + changes.lastName.currentValue;
        this.lastName = aux;
    }
  }




  ngOnInit() {
  }

  onClickSave() {
    this.mensaje.emit('HICISTE CLICK');
  }

}