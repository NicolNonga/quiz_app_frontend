import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizSectionService } from 'src/app/core/services/quiz-section/quiz-section.service';
import { QuizService } from 'src/app/core/services/quiz/quiz.service';

@Component({
  selector: 'app-final-result',
  templateUrl: './final-result.component.html',
  styleUrls: ['./final-result.component.css']
})
export class FinalResultComponent implements OnInit {
   public userId! : string
   public quizSectionId! : string
   public totalPontuation!: number
   public totalPerguntaCertas!:number
   public totlaPerguntaErradas!: number

  constructor(private quizSectionService : QuizSectionService, private route: ActivatedRoute) {
    this.userId = this.route.snapshot.paramMap.get('user_id')!
    console.log
    this.quizSectionId = this.route.snapshot.paramMap.get('section_id')!
   }

  ngOnInit(): void {
    this.showUserPontuation()
  }

  showUserPontuation(){
      this.quizSectionService.showUserPontuation(this.userId, this.quizSectionId).subscribe((response)=>{
        console.log(response)
        this.totalPerguntaCertas= response[0]?.total_pergunta_acertas
        this.totlaPerguntaErradas= response[0]?.total_perguntas_erradas
        this.totalPontuation= response[0]?.punctuation
        console.log(this.totalPerguntaCertas, this.totlaPerguntaErradas, this.totalPontuation)

      })
  }
}
