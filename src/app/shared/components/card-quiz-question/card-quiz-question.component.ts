import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { QuizQuestionService } from "src/app/core/services/quizQuestions/quiz-question.service";
import { IQuizQuestion } from "src/app/feature/quiz-question/interface/quiz-question-interface";

@Component({
  selector: "app-card-quiz-question",
  templateUrl: "./card-quiz-question.component.html",
  styleUrls: ["./card-quiz-question.component.css"],
})
export class CardQuizQuestionComponent implements OnInit {
  public quizQuestionData: any;
  @Output() quizQuestionID = new EventEmitter<string>();
  public quizOptionData: Array<any> = [];
  public quiz_question_id!: string
  constructor(private quizQuestionService: QuizQuestionService) {}

  ngOnInit(): void {
    this.getAllQuizQuestion();
  }

  getAllQuizQuestion() {
    this.quizQuestionService.listAllQuizQuestion().subscribe((response) => {
      this.quizQuestionData = response?._value?.data;
      

      /*      this.quizQuestionFilterData= this.quizQuestionData */
    });
  }
  setQuizQuestionId(quiz_question_id: string){
         this.quizQuestionID.emit(quiz_question_id)
  }
}
