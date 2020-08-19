import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cambiaridioma'
})
export class CambiaridiomaPipe implements PipeTransform {

  transform(value: boolean): any {
    return value ? 'si' : 'no';
  }

}