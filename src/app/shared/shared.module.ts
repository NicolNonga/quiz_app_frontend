import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFieldComponent } from './components/form-field/form-field.component';
import { InputDirective } from '../core/directive/input.directive';
import { HeaderInternComponent } from '../core/components/header-intern/header-intern.component';
import { SiderBarComponent } from '../core/components/sidebar/siderbar.component';

import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    FormFieldComponent,
    InputDirective,
    HeaderInternComponent,
    SiderBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [FormFieldComponent, InputDirective, HeaderInternComponent, SiderBarComponent]
})
export class SharedModule { }
