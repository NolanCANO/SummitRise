import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'happyHour',
  standalone: true
})
export class HappyHourPipe implements PipeTransform {
  transform(value: number | null, percent: number): number {
    if (value === null) {
      return 0;
    }

    return value * (1 - percent / 100);
  }
}