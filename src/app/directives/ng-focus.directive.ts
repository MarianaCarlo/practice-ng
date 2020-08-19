import { Directive, HostListener, ElementRef, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appNgFocus]'
})
export class NgFocusDirective {

  @Output() enviar = new EventEmitter();

  @HostListener('document:click', ['$event', '$event.target']) clickOutside(event, eventTarget){
    console.log('CLICK EN TODO EL DOM', this.el.nativeElement.contains(eventTarget) );

    const aux = this.el.nativeElement.contains(eventTarget);
    if(!aux){
      this.enviar.emit('se hizo click afuera');
    }

  }

  constructor(private el: ElementRef) {
    
  }

}