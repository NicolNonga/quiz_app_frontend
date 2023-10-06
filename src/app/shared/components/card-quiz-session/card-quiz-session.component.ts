import { Component, Input, OnInit } from '@angular/core';
import { DumbComponent } from 'src/app/core/components/dumb-component/dumb-component.compoent';
import { IQuizSection } from 'src/app/feature/feature-quiz/quiz-section/interfaces/quiz_section.interfaces';

@Component({
  selector: 'app-card-quiz-session',
  templateUrl: './card-quiz-session.component.html',
  styleUrls: ['./card-quiz-session.component.css']
})
export class CardQuizSessionComponent extends DumbComponent {
  @Input () cardQuizInfo!: IQuizSection [] 
  constructor() { 
    super()
  }


}
