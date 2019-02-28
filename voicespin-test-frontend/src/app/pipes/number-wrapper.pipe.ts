import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberWrapper'
})
export class NumberWrapperPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    if (!+value) { return value; }
    if (value.length > 12) {
      return this.shapeNumber(value, 12) + 't';
    } else if (value.length > 9) {
      return this.shapeNumber(value, 9) + 'b';
    } else if (value.length > 6) {
      return this.shapeNumber(value, 6) + 'm';
    } else if (value.length > 3) {
      return this.shapeNumber(value, 3) + 'k';
    }
  }

  shapeNumber(number: string, pow: number): string {
    const base = +(+number / Math.pow(10, pow)).toFixed(1);
    return +base % 10 === 0
      ? base.toFixed(0)
      : '' + base;
  }
}
