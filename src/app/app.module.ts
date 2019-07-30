import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SharedModule } from './session/shared.module';
import { NavComponent } from './main/nav/nav.component';
import { TagComponent } from './main/tag/tag.component';
import { NotesComponent } from './main/notes/notes.component';
import { HttpClientModule } from '@angular/common/http';
import { StarComponent } from './main/star/star.component';
import { FiltnotesPipe } from './main/filters/filtnotes.pipe';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TagComponent,
    NotesComponent,
    StarComponent,
    FiltnotesPipe
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
