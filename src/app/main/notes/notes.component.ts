import { Component, OnInit } from '@angular/core';
import { NotesService } from '../services/notes.service';
import { Inotes } from '../models/Inotes.interface';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styles: []
})
export class NotesComponent implements OnInit {

  public notes : Inotes[];

  constructor(private _ns : NotesService) { }

  ngOnInit() {
    this._ns.getNotes().subscribe(data => this.initData(data));
  }

  initData(data : any){
    this.notes=data;
    console.table(data);
  }
}
