import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { DumbComponent } from "src/app/core/components/dumb-component/dumb-component.compoent";

@Component({
  selector: "app-add-answers-quiz-question",
  templateUrl: "./add-answers-quiz-question.component.html",
  styleUrls: ["./add-answers-quiz-question.component.css"],
})
export class AddAnswersQuizQuestionComponent extends DumbComponent {
  public asnwersAdd: Array<any> = [];
   @Input () quiz_section!:any
  @Output() answerEvents = new EventEmitter<any> ()
  public answersForm = { option_text: "", is_img: false, is_correct: '' };
  constructor() {
    super();
  }


  addAnswers(){
    this.asnwersAdd.push({
      option_text: this.answersForm.option_text,
      is_img: this.answersForm.is_img,
      is_correct: this.answersForm.is_correct == "1" ? true: false

    })
  }
  
  submitForm() {
    const data = {
      quiz_question_id: this.quiz_section?.quizQuestion?.id,
      quiz_option:  this.asnwersAdd
    }

    this.answerEvents.emit(data);
  }
}
