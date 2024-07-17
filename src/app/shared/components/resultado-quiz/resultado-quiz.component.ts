import { Component, Input, OnInit } from '@angular/core';
import { DumbComponent } from 'src/app/core/components/dumb-component/dumb-component.compoent';

@Component({
  selector: 'app-resultado-quiz',
  templateUrl: './resultado-quiz.component.html',
  styleUrls: ['./resultado-quiz.component.css']
})
export class ResultadoQuizComponent extends DumbComponent {
  @Input () total_pergunta_erradas!: number 
  @Input () total_pergunta_certa!: number
  @Input () pontuacao!: number 
  
  constructor(){
    super()
  }

}
