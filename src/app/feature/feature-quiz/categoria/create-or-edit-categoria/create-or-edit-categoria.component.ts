import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { DumbComponent } from 'src/app/core/components/dumb-component/dumb-component.compoent';
import { ICategoryDTO, Icategory } from '../interface/category.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-create-or-edit-categoria',
  templateUrl: './create-or-edit-categoria.component.html',
  styleUrls: ['./create-or-edit-categoria.component.css']
})
export class CreateOrEditCategoriaComponent extends DumbComponent {
             @Input () category ! : ICategoryDTO
             @Output () categoryEvent = new EventEmitter<ICategoryDTO> ()
             @Output() updateCategoryEvent = new EventEmitter<Icategory> ()
             public categoryForm!: FormGroup
            public submitted:boolean= false
            public isUpdated: boolean = false
            public title: string = "Criar Categória"
  constructor() {
    super()
    this.categoryForm= new FormGroup({
      id:  new FormControl([{ value: null, disabled: true }]),
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

  
    editCategory(categoria:Icategory,){
       this.categoryForm.patchValue({
          ... categoria
       })

       this.isUpdated= true
       this.title= "Editar Categoria"

       //console.log(this.categoryForm.value)

    }
    
     submittedEditarCategory(){
       if(this.categoryForm.invalid){
         return
       }
       this.updateCategoryEvent.emit(this.categoryForm.value)

     }
    resetForm() {
      this.title= "Criar Categória"
      this.categoryForm.reset()
      this.isUpdated= false
    }



}
