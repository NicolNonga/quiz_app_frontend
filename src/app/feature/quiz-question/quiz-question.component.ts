import { Component, OnInit } from '@angular/core';
import { IQuizQuestion } from './interface/quiz-question-interface';
import { QuizQuestionService } from 'src/app/core/services/quizQuestions/quiz-question.service';

@Component({
  selector: 'app-quiz-question',
  templateUrl: './quiz-question.component.html',
  styleUrls: ['./quiz-question.component.css']
})
export class QuizQuestionComponent implements OnInit {

   public placeholderText= "procurar por perguntas";
   public quizQuestionData!: IQuizQuestion;
   public quizQuestionFilterData!: IQuizQuestion

  constructor(private quizQuestionService: QuizQuestionService) { }

  ngOnInit(): void {
   // this.getAllQuizQuestion();
  }


  getAllQuizQuestion(){
    this.quizQuestionService.listAllQuizQuestion().subscribe((response)=>{
       this.quizQuestionData= response?._value?.data;
   
       this.quizQuestionFilterData= this.quizQuestionData
   
    })
  }

}
