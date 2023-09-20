import { Component, ContentChild, OnInit } from '@angular/core';

import { ERRO_MESSAGES } from 'src/app/core/constant/global.constant';
import { InputDirective } from 'src/app/core/directive/input.directive';
import { IerrorForm } from 'src/app/core/interface/errorForm.interface';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.css']
})
export class FormFieldComponent implements OnInit {
  @ContentChild(InputDirective, {static:true}) 
  inputDirective!: InputDirective
   constructor() { }

  ngOnInit(): void {
  this.checkIfDirectIsEmpty();
  }

  checkIfDirectIsEmpty(){
    if(!this.inputDirective) throw new Error("InputDirective required")
  }
  get errorMessage(): string | null {
      const errors= Object.entries(this.inputDirective?.ngControl.control?.errors || {})
      if(!errors.length){
        return null;
      }
      const [key, value] = errors [0]
      return ERRO_MESSAGES[key as keyof IerrorForm] // ! import o use keyof  to insure the  type are the same 
  }

}
