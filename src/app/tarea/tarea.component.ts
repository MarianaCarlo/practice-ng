import { Component, OnInit, Input, Output, EventEmitter, OnChanges, DoCheck, AfterContentChecked, AfterContentInit, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() name: string;
  @Input() age: number;
  @Input() description: string;

  user: string = 'mario';

  @Output() datos = new EventEmitter();
  constructor() { } 

  ngOnChanges(){
    console.log("ngOnChanges");
  }

  ngOnInit() {
    console.log("ngOnInit");
  }

  ngDoCheck(){
    console.log("ngDoCheck");
  }
  ngAfterContentInit() {
    console.log("ngAfterContentInit");
  }
  ngAfterContentChecked(){
    console.log("ngAfterContentChecked");
  }
  ngAfterViewInit(){
    console.log("ngAfterViewInit");
  }
  ngAfterViewChecked(){
    console.log("ngAfterViewChecked");
  }
  ngOnDestroy() {
    console.log("ngOnDestroy");
  }
}