import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'square'
})
export class SquarePipe implements PipeTransform {

  transform(value: number, exponent: number, message?:string): any {
    return message + ' ' +  Math.pow(value, isNaN(exponent) ? 1 : exponent);
  }

}