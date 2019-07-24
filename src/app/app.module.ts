import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SharedModule } from './session/shared.module';
import { NavComponent } from './main/nav/nav.component';
import { TagComponent } from './main/tag/tag.component';
import { NotesComponent } from './main/notes/notes.component';
import { HttpClientModule } from '@angular/common/http';
import { StarComponent } from './main/star/star.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TagComponent,
    NotesComponent,
    StarComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
