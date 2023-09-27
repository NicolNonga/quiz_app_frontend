import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFieldComponent } from './components/form-field/form-field.component';
import { InputDirective } from '../core/directive/input.directive';
import { HeaderInternComponent } from '../core/components/header-intern/header-intern.component';
import { SiderBarComponent } from '../core/components/sidebar/siderbar.component';

import { RouterModule } from '@angular/router';
import { GenericButtonComponent } from './components/generic-button/generic-button.component';
import { CardQuizComponent } from './components/card-quiz/card-quiz.component';

@NgModule({
  declarations: [
    FormFieldComponent,
    InputDirective,
    HeaderInternComponent,
    SiderBarComponent,
    GenericButtonComponent,
    CardQuizComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [FormFieldComponent, InputDirective, HeaderInternComponent, 
    SiderBarComponent, 
    GenericButtonComponent,
  CardQuizComponent]
})
export class SharedModule { }
