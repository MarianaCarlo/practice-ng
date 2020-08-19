import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipemariana'
})
export class PipemarianaPipe implements PipeTransform {

  transform(value: number, exponent: number): any {
    return 'Hi ' + value;
  }

}