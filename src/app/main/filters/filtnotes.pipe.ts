import { Pipe, PipeTransform } from '@angular/core';
import { Inotes } from '../models/Inotes.interface';

@Pipe({
  name: 'filtnotes'
})
export class FiltnotesPipe implements PipeTransform {

  transform(notes: Inotes[], filtText: string): Inotes[] {
    if(!notes) return [];
    if(!filtText) return notes;
  
    filtText =filtText.toLowerCase();

    return notes.filter((note : Inotes)=> 
    note.title.toLowerCase().includes(filtText));
  }

}
