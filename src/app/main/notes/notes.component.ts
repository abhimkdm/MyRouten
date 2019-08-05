import { Component, OnInit } from '@angular/core';
import { NotesService } from '../services/notes.service';
import { Inotes } from '../models/Inotes.interface';
import { notesModel } from '../models/notes.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls : ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  public notes : Inotes[];
  public note : notesModel = new notesModel();
  public id : number;
  //titleError : string ='Please enter title';
 
  constructor(private _ns : NotesService) { }

  ngOnInit() {
    this._ns.getNotes().subscribe(data => this.initData(data));
  }

  initData(data : any){
    this.notes=data;
   // console.table(data);
  }

  //Store Id
  store(id : number) {
    this.id = id;
    console.log('store' + id);
  }

  //Delete Data
  deleteNotes() {
    this._ns.deleteNotes(this.id).subscribe(data => this.refreshUIAfterDelete());
    //console.log('delete' + this.id);
  }

  refreshUIAfterDelete() {
    this.notes = this.notes.filter(d=>d.id !== this.id);
  }

  // Add notes
  addNotes(noteObj : Inotes, notesForm : NgForm) {
    this._ns.addNotes(noteObj).subscribe(data => this.refreshUI(data, notesForm));
    
  }
  
  refreshUI(data : Inotes, notesForm : NgForm) {
    this.notes.push(data);
    notesForm.form.reset();
    this.clear();
  }

  //Edit Notes
  editNotes(id : number) {
    this.note = this.notes.find(d=>d.id == id); 
  }

  log(control) {
    console.log(control);
  }

  clear(){
    this.note = new notesModel();
  }
}
