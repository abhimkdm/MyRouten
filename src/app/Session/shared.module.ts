import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { StructuralComponent } from './structural/structural.component';
import { DirectivesComponent } from './directives/directives.component';
import { HighlightDirective } from './directives/highlight.directive';
import { BindingsComponent } from '../Session/bindings/bindings.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    InterpolationComponent,
    StructuralComponent,
    DirectivesComponent,
    HighlightDirective,
    BindingsComponent
  ],
  exports: [ BindingsComponent ]
})
export class SharedModule { }
