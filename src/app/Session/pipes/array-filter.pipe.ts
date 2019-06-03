import { Pipe, PipeTransform } from '@angular/core';
import { Brands } from '../Models/Brands';

@Pipe({
  name: 'arrayFilter'
})
export class ArrayFilterPipe implements PipeTransform {

  transform(brands: Brands[], searchPar: string): Brands[] {
    if(!searchPar) 
      return brands;
    
    return brands.filter(brnd =>
       brnd.Name.toLowerCase().indexOf(searchPar.toLowerCase()) !== -1 );
  }

}
