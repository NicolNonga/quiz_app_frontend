import { Component, Input, OnInit } from '@angular/core';
import { DumbComponent } from 'src/app/core/components/dumb-component/dumb-component.compoent';
import { QuizInterface } from 'src/app/feature/feature-quiz/quiz/interface/quiz.interface';

@Component({
  selector: 'app-card-quiz',
  templateUrl: './card-quiz.component.html',
  styleUrls: ['./card-quiz.component.css']
})
export class CardQuizComponent extends DumbComponent  {

  @Input () cardQuizInfor !: QuizInterface []
  constructor() { 
    super()
  }


}
