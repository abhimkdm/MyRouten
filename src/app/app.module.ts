import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SharedModule } from './Session/shared.module';
import { NavComponent } from './main/nav/nav.component';
import { TagComponent } from './main/tag/tag.component';
import { NotesComponent } from './main/notes/notes.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TagComponent,
    NotesComponent
  ],
  imports: [
    BrowserModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
