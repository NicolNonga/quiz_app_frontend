import { Component, OnInit, ViewChild } from '@angular/core';
import { SmartComponent } from 'src/app/core/components/smart-component/smart-component.component';
import { LoadingJsFile } from 'src/app/core/services/loadingJs/loadingJs.service';
import { QuizService } from 'src/app/core/services/quiz/quiz.service';
import { QuizDTO, QuizInterface } from './interface/quiz.interface';
import { NotificationService } from 'src/app/core/services/notification/notification.service';
import { IGericButton } from 'src/app/shared/interface/generic-button.interface';
import { quizQuestionInterface } from '../../quiz-question/interface/quiz-question-interface';
import { CreateOrEditQuizComponent } from './create-or-edit-quiz/create-or-edit-quiz.component';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent  extends SmartComponent implements OnInit {
  public quizData: Array<QuizInterface> = []
  public quizDataToFilter : Array<QuizInterface> = [];
  public filterQuizValue: string = ''
  public placeholderText ="Pesquisar quiz"

  @ViewChild(CreateOrEditQuizComponent, {static:true})
  public createOrEditQuiz!: CreateOrEditQuizComponent

public buttonProprietis: IGericButton = {
          show_model: true,
          data_target_name: '#exampleModal',
          style: '',
          class: 'button primary login-button',
          name: 'Criar Quiz'
}
    
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

    public filterQuiz(value: string){
      this.quizData= [];
      this.quizData= this.quizService.filterQuiz(this.quizDataToFilter,  value)
      
    }

    setQuiz(quiz: QuizInterface){
  
      this.createOrEditQuiz.getQuiz(quiz)
    }
}

