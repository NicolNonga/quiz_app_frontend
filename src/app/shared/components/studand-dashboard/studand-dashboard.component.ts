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


  private listAllQuizSection() {
    this.quizSectionService.listAllQuizSection().subscribe((response) => {
      this.quizSectionData = response?.data._value;
      
    });
  }


  getStundantInfo() {
    this.studantInfo= this.autheService.getItemLocalStorage?.data
    this.bannerTitle.title = ` Bem-vindo Senhor(a) - ${this.studantInfo.username}`
  }

  getSection(section:IQuizSection) {
   
    this.router.navigate(['/section-question',  section.id ])
  }

}
