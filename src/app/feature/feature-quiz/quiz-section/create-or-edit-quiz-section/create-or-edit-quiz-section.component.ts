import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { QuizDTO, QuizInterface } from '../../quiz/interface/quiz.interface';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { DumbComponent } from 'src/app/core/components/dumb-component/dumb-component.compoent';
import { IQuizSectionDTO } from '../interfaces/quiz_section.interfaces';
import { Icategory } from '../../categoria/interface/category.interface';

@Component({
  selector: 'app-create-or-edit-quiz-section',
  templateUrl: './create-or-edit-quiz-section.component.html',
  styleUrls: ['./create-or-edit-quiz-section.component.css']
})
export class CreateOrEditQuizSectionComponent  extends DumbComponent {

  @Output() quizSectionEvent = new EventEmitter<IQuizSectionDTO> ()
  public quizSectionForm!: FormGroup;

  @Input() titleModal: string = ""
  @Input() category!:Icategory []
  @Input() quiz!: QuizInterface []
  constructor() { 
    super()
    this.quizSectionForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      quiz_id: new FormControl(null, Validators.required),
      category_id : new FormControl(null, [Validators.required])
    })
  
  }

    submitForm(){
      if(this.quizSectionForm.invalid){
        return
      }
      this.quizSectionEvent.emit(this.quizSectionForm.value)
      console.log(this.quizSectionForm.value)
      this.quizSectionForm.reset()
      
    }
}
