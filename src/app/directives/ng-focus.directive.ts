import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appNgFocus]'
})
export class NgFocusDirective {

  @HostListener('document:click') clickOutside(){
    console.log('CLICK EN TODO EL DOM');
  }

  constructor() { }

}