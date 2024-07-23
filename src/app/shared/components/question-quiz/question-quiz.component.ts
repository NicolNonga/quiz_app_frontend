import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Subscriber, Subscription, interval } from "rxjs";
import { QuestionModel, quiz_option } from "src/app/core/model/questsion";
import { AuthenticationService } from "src/app/core/services/authentication/auth.service";
import { QuizSectionService } from "src/app/core/services/quiz-section/quiz-section.service";
import { environment } from "src/environments/environment";
import { UserModel } from "../../models/user-model";
@Component({
  selector: "app-question-quiz",
  templateUrl: "./question-quiz.component.html",
  styleUrls: ["./question-quiz.component.css"],
})
export class QuestionQuizComponent implements OnInit {
  public quiz_section_id!: string ;
  public quiz_started: boolean = false
  public questionList: Array<QuestionModel> = [];
  public currentQuestionNumber: number = 0;
  public remainingTime: number = 15;
  public subscribe: Subscription[] = []
  public curectAnswer: number = 0;
  public wrongAnswer: number = 0;
  public isLastQuestion: boolean = false
  public totalPontos: number = 0;
  public time = interval(1000);
  public baseUrl= `${environment.app_url}/attachement`
  public currentUser!:any
  option_id!: string 
  constructor(
    private route: ActivatedRoute,
    public quizSectionService: QuizSectionService,
    public authService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.currentUser=this.authService.userValue;

  
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.quiz_section_id = params.get("id") ?? ''

     
    });
  }

  listAllQuestion() {
    this.quizSectionService
      .section_question(this.quiz_section_id)
      .subscribe((response) => {
        this.questionList = response;

     
       
      });
  }

  nextQuestion() {
    if (this.currentQuestionNumber < this.questionList.length - 1){
      this.currentQuestionNumber++;
      this.remainingTime = 15;
    }else {
      this.subscribe.forEach(element => {
         element.unsubscribe()
      });
    }
  }

  updateTime() {
    this.subscribe.push(
      this.time.subscribe((res) => {
        if (this.remainingTime !== 0) {
          this.remainingTime--;
        }

        if (this.remainingTime == 0) {
          this.nextQuestion();
     
        }
      })
    );
  }

  questionSelected(option:any, quizQuestion:any){

     console.log(option)
     
     this.quizSectionService.quizAttemped({
      user_id: this.currentUser?.data?.id,
      option_id: option.id,
      quiz_section_id:  this.quiz_section_id
     }).subscribe((res)=>{
      console.log("res")
     })

        if(option.is_correct){
          this.curectAnswer++;
          console.log(this.totalPontos, quizQuestion?.value)
          this.totalPontos = this.totalPontos +  quizQuestion?.value 
         
        }

         if(!option.is_correct){
          this.wrongAnswer++
         }

         if(this.currentQuestionNumber >= this.questionList.length - 1){
          
           
           this.quizSectionService.quizCompleted(this.currentUser?.data?.id, this.quiz_section_id).subscribe((res)=>{
            
           })
        
          setTimeout(() => {
           this.isLastQuestion= true
           this.quizSectionService.saveUserPontuation({
            puntuation: this.totalPontos,
            total_pergunta_acertas: this.curectAnswer,
            total_perguntas_erradas: this.wrongAnswer,
            user_id: this.currentUser?.data?.id,
            quiz_section_id:  this.quiz_section_id
          }).subscribe((res)=> {
            
          })
          }, 2000);
        
         }
      
     
      this.option_id  = option.id 


  }


  isOptionSelected(option:quiz_option []){
    const is_selected = option.filter((option:quiz_option) => option.id === this.option_id).length;

    return is_selected  === 0 ? false : true
  }

  startQuiz(){
    this.quiz_started= true
    this.listAllQuestion();
    this.updateTime();
  }
}
