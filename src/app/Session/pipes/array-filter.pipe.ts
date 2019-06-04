import { Pipe, PipeTransform } from '@angular/core';
import { Brands } from '../Models/Brands';

@Pipe({
  name: 'arrayFilter',
  pure: false
})
export class ArrayFilterPipe implements PipeTransform {

  count : number =0;

  transform(brands: Brands[], searchPar: string): Brands[] {

    this.count++;
    console.log("Impure Pipe :" + this.count);

    if(!searchPar) 
      return brands;

    return brands.filter(brnd =>
                          brnd.Name.toLowerCase().
                          indexOf(searchPar.toLowerCase()) !== -1 );
  }

}
