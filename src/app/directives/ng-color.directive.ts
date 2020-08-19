import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appNgColor]'
})
export class NgColorDirective {
  @Input('appNgColor') colorClick:string;

  @HostListener('mouseenter') onMouseEnter(){
    this.el.nativeElement.style.backgroundColor = this.colorClick;
    console.log('MOUSE ENTER')
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.el.nativeElement.style.backgroundColor = 'yellow';
    console.log('MOUSE Leave')
  }

  constructor(private el: ElementRef) { 
    console.log('ELEMENT REF: ', el);

    el.nativeElement.style.backgroundColor = 'green';
  }

}