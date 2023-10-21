import { Component, Input, OnInit,  EventEmitter, Output } from '@angular/core';
import { DumbComponent } from 'src/app/core/components/dumb-component/dumb-component.compoent';
import { QuizDTO } from '../interface/quiz.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-create-or-edit-quiz',
  templateUrl: './create-or-edit-quiz.component.html',
  styleUrls: ['./create-or-edit-quiz.component.css']
})
export class CreateOrEditQuizComponent  extends DumbComponent {
  @Input () quizData! : QuizDTO
  @Output()  quizEvent = new  EventEmitter <QuizDTO> ()
  quizform!: FormGroup;
  submitted: boolean= false
  constructor(){
    super()

    this.quizform= new FormGroup({
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

  get f() {
    return this.quizform.controls
  }





}
