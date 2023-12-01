import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Subscriber, Subscription, interval } from "rxjs";
import { QuestionModel, quiz_option } from "src/app/core/model/questsion";
import { QuizSectionService } from "src/app/core/services/quiz-section/quiz-section.service";
import { environment } from "src/environments/environment";
@Component({
  selector: "app-question-quiz",
  templateUrl: "./question-quiz.component.html",
  styleUrls: ["./question-quiz.component.css"],
})
export class QuestionQuizComponent implements OnInit {
  public quiz_section_id!: string | null;
  public questionList: Array<QuestionModel> = [];
  public currentQuestionNumber: number = 0;
  public remainingTime: number = 15;
  public subscribe: Subscription[] = [];
  public time = interval(1000);
  public baseUrl= `${environment.app_url}/attachement`
  option_id!: string 
  constructor(
    private route: ActivatedRoute,
    public quizSectionService: QuizSectionService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.quiz_section_id = params.get("id");

      this.listAllQuestion();
      this.updateTime();
    });
  }

  listAllQuestion() {
    this.quizSectionService
      .section_question(this.quiz_section_id)
      .subscribe((response) => {
        console.log(response)
        this.questionList = response;
       
      });
  }

  nextQuestion() {
    if (this.currentQuestionNumber < this.questionList.length - 1){
      this.currentQuestionNumber++;
      this.remainingTime = 15;
    }else {
      this.subscribe.forEach(element => {
         element.unsubscribe()
      });
    }
  }

  updateTime() {
    this.subscribe.push(
      this.time.subscribe((res) => {
        if (this.remainingTime !== 0) {
          this.remainingTime--;
        }

        if (this.remainingTime == 0) {
          this.nextQuestion();
     
        }
      })
    );
  }

  questionSelected(option:any){
      this.option_id  = option.id 
  }

  getImg(test:any){
   
  }
  isOptionSelected(option:quiz_option []){
    const is_selected = option.filter((option:quiz_option) => option.id === this.option_id).length;

    return is_selected  === 0 ? false : true
  }
}
