import { Pipe, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Pipe({name: 'euro'})
export class EuroPipe extends DecimalPipe implements PipeTransform {

  transform(value: number, type: string = ''): string|null {
    let formatted = super.transform(Math.abs(value), '1.0-0');
    let custom = '€ ' + formatted;

    if (value < 0) {
      custom = '- ' + custom;
    } else if (value > 0 && /credit$/i.test(type)) {
      custom = '+ ' + custom;
    }
    return custom;
  }
}
