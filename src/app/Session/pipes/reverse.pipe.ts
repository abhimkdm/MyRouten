import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name : 'reverse'
})

export class reversePipe implements PipeTransform  {
    transform(value: any) {
       return value.split('').reverse().join('');
    }
}