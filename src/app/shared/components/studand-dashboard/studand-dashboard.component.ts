import { Component, Input, OnInit } from '@angular/core';
import { UserModel } from 'src/app/core/model/user';
import { IUser } from 'src/app/core/interface/user.interface';
import { AuthenticationService } from 'src/app/core/services/authentication/auth.service';
import { QuizSectionService } from 'src/app/core/services/quiz-section/quiz-section.service';
import { IQuizSection } from 'src/app/feature/feature-quiz/quiz-section/interfaces/quiz_section.interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studand-dashboard',
  templateUrl: './studand-dashboard.component.html',
  styleUrls: ['./studand-dashboard.component.css']
})
export class StudandDashboardComponent implements OnInit {
   public  studantInfo!: UserModel;
   public quizSectionData: Array<IQuizSection> = [];
  bannerTitle = {
    description: 'Por favor Escolha uma Sessão Pra  Começar a Quiz',
    title: 'te'
  }

  constructor(private autheService: AuthenticationService, 
    public quizSectionService: QuizSectionService,
    private router: Router ) { }


  ngOnInit(): void {
    this.getStundantInfo();
    this.listAllQuizSection()
   
  }


  public listAllQuizSection() {
    this.quizSectionService.getQuizSectionBytUser().subscribe((response) => {
     const data = response?._vlaue;
      this.quizSectionData = response?._value.map((data:any)=>{
            return {
               id: data.quiz.id,
               name:  data.quiz.name,
               category_id: data.quiz.category_id,
               quiz_id: data.quiz.quiz_id,
               createdAt: data.quiz.createdAt,
               updatedAt:data.quiz.updatedAt,
               category : data.quiz.category,
               quiz: data.quiz.quiz,
               is_completed: data.completed
            }
      });

   
      
      
    }, (err)=> console.log(err));
  }


  getStundantInfo() {
    this.studantInfo= this.autheService.getItemLocalStorage?.data
    this.bannerTitle.title = ` Bem-vindo Senhor(a) - ${this.studantInfo.username}`
    const user = {user_id : 1}
     this.quizSectionService.listAllQuizSection().subscribe((res)=> {
     
     })
  }


  getSection(section:IQuizSection) {
   

      if(section.is_completed){
         this.router.navigate(['quiz-section-final-result', this.studantInfo.id, section.id])
        return 
      }
    const url = this.router.serializeUrl(
      this.router.createUrlTree(['/section-question',  section.id ])
    );
    window.open(url, '_blank');

  }

}
