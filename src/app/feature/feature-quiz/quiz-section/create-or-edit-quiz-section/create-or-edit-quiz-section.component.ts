import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { QuizDTO, QuizInterface } from '../../quiz/interface/quiz.interface';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { DumbComponent } from 'src/app/core/components/dumb-component/dumb-component.compoent';
import { IQuizSection, IQuizSectionDTO } from '../interfaces/quiz_section.interfaces';
import { Icategory } from '../../categoria/interface/category.interface';

@Component({
  selector: 'app-create-or-edit-quiz-section',
  templateUrl: './create-or-edit-quiz-section.component.html',
  styleUrls: ['./create-or-edit-quiz-section.component.css']
})
export class CreateOrEditQuizSectionComponent  extends DumbComponent {

  @Output() quizSectionEvent = new EventEmitter<IQuizSectionDTO> ();
  @Output () updateQuizSectionEvent = new EventEmitter<IQuizSection> ();

  public quizSectionForm!: FormGroup;
  public submitted: boolean= false;
  @Input() titleModal: string = ""
  @Input() category!:Icategory []
  @Input() quiz!: QuizInterface [];
  public isUpdated: boolean= false
  constructor() { 
    super()
    this.quizSectionForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      id: new FormControl([{value: null, disabled: true}]),
      quiz_id: new FormControl(null, Validators.required),
      category_id : new FormControl(null, [Validators.required])
    })
  
  }

  get f(){
    return this.quizSectionForm.controls
  }

    submitForm(){
       this.submitted= true
      if(this.quizSectionForm.invalid){
        return
      }
      this.quizSectionEvent.emit(this.quizSectionForm.value)
      this.submitted= false
      this.quizSectionForm.reset()
      
    }

    resetInput(){
      this.submitted= false
      this.quizSectionForm.reset();
    }

    setQuizSession(quizSession:IQuizSection){
      this.quizSectionForm.patchValue({
        ...quizSession
      })
      this.isUpdated= true
      this.titleModal="Editar Quiz Sessão"
    }

    resetForm() {
      this.titleModal= "Criar Quiz Sessão"
      this.quizSectionForm.reset();
      this.isUpdated= false
    }

    updateQuizSectio() {
      if(this.quizSectionForm.invalid){
        alert("please  Quiz formulario invalido")
        return
      }
      this.updateQuizSectionEvent.emit(this.quizSectionForm.value)
    }
}
