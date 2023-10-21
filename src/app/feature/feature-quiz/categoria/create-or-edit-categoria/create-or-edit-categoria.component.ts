import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { DumbComponent } from 'src/app/core/components/dumb-component/dumb-component.compoent';
import { ICategoryDTO } from '../interface/category.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-create-or-edit-categoria',
  templateUrl: './create-or-edit-categoria.component.html',
  styleUrls: ['./create-or-edit-categoria.component.css']
})
export class CreateOrEditCategoriaComponent extends DumbComponent {
             @Input () category ! : ICategoryDTO
             @Output () categoryEvent = new EventEmitter<ICategoryDTO> ()
             public categoryForm!: FormGroup
            public submitted:boolean= false
  constructor() {
    super()
    this.categoryForm= new FormGroup({
      name: new FormControl('', [Validators.required])
    })
  }

  get f() {
    return this.categoryForm.controls
  }

    submitForm(){
      this.submitted= true
      if(this.categoryForm.invalid){
      
        return
      }
      this.categoryEvent.emit(this.categoryForm.value)
      this.categoryForm.reset()
      this.submitted= false
    }



}
