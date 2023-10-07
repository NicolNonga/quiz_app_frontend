import { Component, OnInit } from '@angular/core';
import { IQuizQuestion } from './interface/quiz-question-interface';
import { QuizQuestionService } from 'src/app/core/services/quizQuestions/quiz-question.service';
import { QuizSectionService } from 'src/app/core/services/quiz-section/quiz-section.service';
import { IQuizSection } from '../feature-quiz/quiz-section/interfaces/quiz_section.interfaces';
import { NotificationService } from 'src/app/core/services/notification/notification.service';

@Component({
  selector: 'app-quiz-question',
  templateUrl: './quiz-question.component.html',
  styleUrls: ['./quiz-question.component.css']
})
export class QuizQuestionComponent implements OnInit {

   public placeholderText= "procurar por perguntas";
   public quizQuestionData!: IQuizQuestion;
   public quizQuestionFilterData!: IQuizQuestion
   public quizSessionData: Array<IQuizSection> = [];

  constructor(private quizQuestionService: QuizQuestionService, 
    private quizSessaoService: QuizSectionService,  private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.getAllQuizSession()
   // this.getAllQuizQuestion();
  }



  getAllQuizSession(){
    this.quizSessaoService.listAllQuizSection().subscribe((response)=>{
     
      this.quizSessionData = response?.data._value
    })
  }
  getAllQuizQuestion(){
    this.quizQuestionService.listAllQuizQuestion().subscribe((response)=>{
       this.quizQuestionData= response?._value?.data;
   
       this.quizQuestionFilterData= this.quizQuestionData
   
    })
  }
  createQuizQuestion(event:any){
         this.quizQuestionService.createQuizQuestion(event).subscribe((response)=>{
          if(response){
             this.notificationService.showSucess("Quiz Question criado com sucesso")
          }
         })
  }
   
}
