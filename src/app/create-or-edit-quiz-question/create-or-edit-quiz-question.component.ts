import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { IQuizSection } from "../feature/feature-quiz/quiz-section/interfaces/quiz_section.interfaces";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-create-or-edit-quiz-question",
  templateUrl: "./create-or-edit-quiz-question.component.html",
  styleUrls: ["./create-or-edit-quiz-question.component.css"],
})
export class CreateOrEditQuizQuestionComponent implements OnInit {
  @Input() quizSection: Array<IQuizSection> = [];
  @Output() quizQuestionEvent = new EventEmitter<any>();
  public quizText: string = "";
  public quizSection_id !:string
  public quizQuestionAdded: Array<any> = [];
  constructor() {}

  ngOnInit(): void {}

  addQuizQuestion() {

    if(this.quizText == '' || this.quizSection_id == ''){
      alert('por favor preencha todos campos')
      return
    }

     const quizSectionAdd =  this.quizQuestionAdded.find((quiz)=> quiz?.quiz_section_id == this.quizSection_id)
     if(quizSectionAdd){
       alert("Quiz Session Add")
      return
     }
    const quizSession : IQuizSection | undefined = this.quizSection.find((quiz:IQuizSection)=> quiz.id ==  this.quizSection_id)



    this.quizQuestionAdded.push({
      quiz_section_id: quizSession?.id,
       quiz_section_name: quizSession?.name,
      
    })


  }

  createQuizQuestion(){
     if(this.quizQuestionAdded.length == 0){
       alert("Adiciona quiz Sessão ")
       return 
     }
   /*   "question_text": "qualdfdfda dddf",
     "section": [{"quiz_section_id": "111e2c6b-249e-4de8-8847-007585b494fd"}] */

     const section = this.quizQuestionAdded.map((quiz)=>{
      return {
        quiz_section_id: quiz?.quiz_section_id
      }
     })
  
     this.quizQuestionEvent.emit({question_text: this.quizText, section:section})
     this.quizSection_id ='';
     this.quizText= ''
     this.quizQuestionAdded = []
  }
}
