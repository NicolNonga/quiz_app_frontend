import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/authentication/auth.service';
import { QuizSectionList, QuizSectionUserModel } from '../../models/quiz-section-user-model';
import { IQuizSection } from 'src/app/feature/feature-quiz/quiz-section/interfaces/quiz_section.interfaces';

@Component({
  selector: 'app-utilizador-quiz-section',
  templateUrl: './utilizador-quiz-section.component.html',
  styleUrls: ['./utilizador-quiz-section.component.css']
})
export class UtilizadorQuizSectionComponent implements OnInit {
  private userId!: string
  public quizSectionUsers!: Array<QuizSectionUserModel>
  public is_studant: boolean = true
  constructor(private route: ActivatedRoute, private userService: AuthenticationService, private router: Router) { 
        this.userId =  this.route.snapshot.paramMap.get('id')!
  }

  ngOnInit(): void {
    this.getUserQuizSection()
  }

  getUserQuizSection(){
      this.userService.getAllQuizUser(this.userId).subscribe((response: any)=>{
        const data = response?._vlaue;
        this.quizSectionUsers = response?._value.map((data:any)=>{
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
            
      })
  }

   goToFinalResults(quiz_section: IQuizSection) {
    if(!quiz_section.is_completed){
      alert("Ainda  Não fez a quiz")
      return
    }
    console.log(quiz_section)
      this.router.navigate(['quiz-section-final-result',  this.userId, quiz_section.id])
 
  }
}
