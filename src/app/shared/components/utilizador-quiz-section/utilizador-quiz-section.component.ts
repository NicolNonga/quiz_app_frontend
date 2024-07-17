import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/authentication/auth.service';
import { QuizSectionList, QuizSectionUserModel } from '../../models/quiz-section-user-model';

@Component({
  selector: 'app-utilizador-quiz-section',
  templateUrl: './utilizador-quiz-section.component.html',
  styleUrls: ['./utilizador-quiz-section.component.css']
})
export class UtilizadorQuizSectionComponent implements OnInit {
  private userId!: string
  public quizSectionUsers!: Array<QuizSectionUserModel>
  public is_studant: boolean = true
  constructor(private route: ActivatedRoute, private userService: AuthenticationService) { 
        this.userId =  this.route.snapshot.paramMap.get('id')!
  }

  ngOnInit(): void {
    this.getUserQuizSection()
  }

  getUserQuizSection(){
      this.userService.getAllQuizUser(this.userId).subscribe((response: QuizSectionList)=>{
              this.quizSectionUsers = response._value
              console.log(this.quizSectionUsers)
      })
  }

}
