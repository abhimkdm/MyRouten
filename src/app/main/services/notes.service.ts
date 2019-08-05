import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Inotes } from '../models/Inotes.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  private baseUrl : string ='http://localhost:3000/notes';

  constructor(private _http: HttpClient) { }

  getNotes() : Observable<Inotes[]> {
   return this._http.get<Inotes[]>(this.baseUrl);
  }

  deleteNotes(id : number) : Observable<any> {
    return this._http.delete(this.baseUrl+'/'+id);
  }

  addNotes(note : Inotes) : Observable<any> {
    return this._http.post(this.baseUrl, note);
  }

}
