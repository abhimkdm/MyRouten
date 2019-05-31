import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InterpolationComponent } from './Session/interpolation/interpolation.component';
import { StructuralComponent } from './Session/structural/structural.component';
import { DirectivesComponent } from './Session/directives/directives.component';
import { HighlightDirective } from './Session/directives/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    StructuralComponent,
    DirectivesComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [DirectivesComponent]
})
export class AppModule { }
