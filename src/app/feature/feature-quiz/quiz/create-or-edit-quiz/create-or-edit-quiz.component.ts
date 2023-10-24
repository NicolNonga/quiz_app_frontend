import { Component, Input, OnInit,  EventEmitter, Output } from '@angular/core';
import { DumbComponent } from 'src/app/core/components/dumb-component/dumb-component.compoent';
import { QuizDTO, QuizInterface } from '../interface/quiz.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-create-or-edit-quiz',
  templateUrl: './create-or-edit-quiz.component.html',
  styleUrls: ['./create-or-edit-quiz.component.css']
})
export class CreateOrEditQuizComponent  extends DumbComponent {
  @Input () quizData! : QuizDTO
  @Output()  quizEvent = new  EventEmitter <QuizDTO> ()
  @Output() editQuizEvent = new EventEmitter<QuizInterface>()
  public title: string = "Criar Nova Quiz"
  quizform!: FormGroup;
  submitted: boolean= false
  isUpdate: boolean= false
  constructor(){
    super()

    this.quizform= new FormGroup({
      id:  new FormControl([{ value: null, disabled: true }]),
      name : new FormControl('', [Validators.required]),
      topic: new FormControl('', Validators.required)
    })
  }


  submitForm(){

    this.submitted= true
    if(this.quizform.invalid){
      return 
    }

    this.submitted= false

     this.quizEvent.emit(this.quizform.value)
     this.quizform.reset()
     
  }

  editQuiz(){
    
    //! first we check if ths quiz form is not empty
    if(this.quizform.invalid){
      return
    }

    this.editQuizEvent.emit(this.quizform.value)
    

  }

  get f() {
    return this.quizform.controls
  }

   public getQuiz(quiz: QuizInterface){
    
    this.title= "Editar Quiz"
    this.quizform.patchValue({...quiz})
    this.isUpdate= true;
   }

   resetForm() {
    this.title= "Criar Nova Quiz"
    this.quizform.reset();
    this.submitted= false;
    this.isUpdate= false;
   }

}
