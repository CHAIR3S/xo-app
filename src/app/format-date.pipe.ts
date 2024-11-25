import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDate',
  standalone: true
})
export class FormatDatePipe implements PipeTransform {
  transform(value: string, type: 'day' | 'month'): string {
    const fecha = new Date(value);

    if (type === 'day') {
      return fecha.getDate().toString(); // Número del día
    }

    if (type === 'month') {
      return fecha.toLocaleString('en-US', { month: 'short' }).toUpperCase(); // "DEC"
    }

    return value;
  }
}
