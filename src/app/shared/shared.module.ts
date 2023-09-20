import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFieldComponent } from './components/form-field/form-field.component';
import { InputDirective } from '../core/directive/input.directive';
import { HeaderInternComponent } from '../core/components/header-intern/header-intern.component';



@NgModule({
  declarations: [
    FormFieldComponent,
    InputDirective,
    HeaderInternComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [FormFieldComponent, InputDirective, HeaderInternComponent]
})
export class SharedModule { }
