import { Component, OnInit } from '@angular/core';
import { SmartComponent } from 'src/app/core/components/smart-component/smart-component.component';
import { LoadingJsFile } from 'src/app/core/services/loadingJs/loadingJs.service';
import { QuizService } from 'src/app/core/services/quiz/quiz.service';
import { QuizDTO, QuizInterface } from './interface/quiz.interface';
import { NotificationService } from 'src/app/core/services/notification/notification.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent  extends SmartComponent implements OnInit {
  public quizData: Array<QuizInterface> = []
  public quizDataToFilter : Array<QuizInterface> = [];
  public filterQuizValue: string = ''
    
  constructor(private loadingJs: LoadingJsFile, 
    public quizService: QuizService,
    private notificationService: NotificationService
    ) {
       super()
     this.loadingJs.loadingMainJs('assets/js/app.bundle.min.js' )
   
   }

  ngOnInit(): void {
     this.getAllQuiz()
  }

    getAllQuiz() {
         this.quizService.listAllQuiz().subscribe((data)=>{
            this.quizData = data?._value;
            this.quizDataToFilter= this.quizData;
           
         })
    }


    createQuiz(quiz: QuizDTO | any){
   
        this.quizService.create(quiz).subscribe(data=>{
          if(data){
             this.notificationService.showSucess('Quiz Criado Com  Sucesso')
             this.getAllQuiz()
          }
        })
    }

    public filterQuiz(){
      this.quizData= [];
      this.quizData= this.quizService.filterQuiz(this.quizDataToFilter, this.filterQuizValue)
      
    }
}

