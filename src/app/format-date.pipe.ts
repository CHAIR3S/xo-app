import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDate',
  standalone: true
})
export class FormatDatePipe implements PipeTransform {
  transform(value: string, type: 'day' | 'month' | 'fullDate' | 'time'): string {
    const fecha = new Date(value);

    if (type === 'day') {
      return fecha.getDate().toString(); // Número del día
    }

    if (type === 'month') {
      return fecha.toLocaleString('es-ES', { month: 'short' }).toUpperCase(); // "DIC"
    }

    if (type === 'fullDate') {
      return `${fecha.getDate()}  ${fecha.toLocaleString('es-ES', { month: 'long' })} ${fecha.getFullYear()}`;
      // Ejemplo: "6 de febrero de 2025"
    }

    if (type === 'time') {
      return fecha.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });
      // Ejemplo: "18:12"
    }

    return value;
  }
}
