import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { StructuralComponent } from './structural/structural.component';
import { DirectivesComponent } from './directives/directives.component';
import { HighlightDirective } from './directives/highlight.directive';
import { BindingsComponent } from './bindings/bindings.component';
import { FormsModule } from '@angular/forms';
import { reversePipe } from './pipes/reverse.pipe';
import { ArrayFilterPipe } from './pipes/array-filter.pipe';
import { ServicesComponent } from './services/services.component';
import { BootStrapComponent } from './boot-strap/boot-strap.component';

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
    BindingsComponent,
    reversePipe,
    ArrayFilterPipe,
    ServicesComponent,
    BootStrapComponent
  ],
  exports: [ BootStrapComponent ]
})
export class SharedModule { }
