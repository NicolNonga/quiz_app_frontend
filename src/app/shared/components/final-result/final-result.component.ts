import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionModel } from 'src/app/core/model/questsion';
import { QuizSectionService } from 'src/app/core/services/quiz-section/quiz-section.service';
import { QuizService } from 'src/app/core/services/quiz/quiz.service';
import { quizQuestionInterface } from 'src/app/feature/quiz-question/interface/quiz-question-interface';

@Component({
  selector: 'app-final-result',
  templateUrl: './final-result.component.html',
  styleUrls: ['./final-result.component.css']
})
export class FinalResultComponent implements OnInit {
   public userId! : string
   public quizSectionId! : string
   public totalPontuation!: number
   public totalPerguntaCertas!:number
   public totlaPerguntaErradas!: number
  public quizAttempted:Array<any> = [];
  public quiz_section_id!: string ;
  public quiz_started: boolean = false
  public sectionQuestion: Array<any> = [];
  public currentQuestionNumber: number = 0;

  constructor(private quizSectionService : QuizSectionService, private route: ActivatedRoute) {
    this.userId = this.route.snapshot.paramMap.get('user_id')!
    this.quizSectionId = this.route.snapshot.paramMap.get('quiz_section_id')!
   console.log(this.quizSectionId, this.userId)
   }

  ngOnInit(): void {
    this.showUserPontuation()
    this.getQuizAttempted()
  }

  showUserPontuation(){
      this.quizSectionService.showUserPontuation(this.userId, this.quizSectionId).subscribe((response)=>{
       
        this.totalPerguntaCertas= response[0]?.total_pergunta_acertas
        this.totlaPerguntaErradas= response[0]?.total_perguntas_erradas
        this.totalPontuation= response[0]?.punctuation
  
      })
  }

  public getQuizAttempted(){
      this.quizSectionService.getQuizAttemped(this.userId, this.quizSectionId).subscribe((res)=>{
           this.sectionQuestion = res?.data?.map((data:any)=>{
              return {
                question: data?.quiz_section?.section_question,
                quiz_option_id: data?.quez_option_id,
                time_take_to_complete: data?.time_take_to_complete
              }
           });

      })
  }

  public nextQuestion(){
     if(this.currentQuestionNumber >=this.sectionQuestion[0]?.question?.length -1 ){
      return
     } 
     this.currentQuestionNumber ++
  }
}
