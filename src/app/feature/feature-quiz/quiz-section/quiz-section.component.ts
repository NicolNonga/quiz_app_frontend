import { Component, OnInit, ViewChild } from "@angular/core";
import { QuizSectionService } from "src/app/core/services/quiz-section/quiz-section.service";
import { IQuizSection, IQuizSectionDTO } from "./interfaces/quiz_section.interfaces";
import { LoadingJsFile } from "src/app/core/services/loadingJs/loadingJs.service";
import { QuizService } from "src/app/core/services/quiz/quiz.service";
import { CategoryService } from "src/app/core/services/category/category.service";
import { NotificationService } from "src/app/core/services/notification/notification.service";
import { Icategory } from "../categoria/interface/category.interface";
import { QuizInterface } from "../quiz/interface/quiz.interface";
import { __values } from "tslib";
import { CreateOrEditQuizSectionComponent } from "./create-or-edit-quiz-section/create-or-edit-quiz-section.component";

@Component({
  selector: "app-quiz-section",
  templateUrl: "./quiz-section.component.html",
  styleUrls: ["./quiz-section.component.css"],
})
export class QuizSectionComponent implements OnInit {
  public quizSectionData: Array<IQuizSection> = [];
  public placeholderText: string = "pesquisar quiz sessão";
  public quizDataToFiler: Array<IQuizSection> = [];
  public titleModalCriar: string = "Criar Quiz Sessão";
  public category!: Icategory[];
  public quiz!: QuizInterface[];
  @ViewChild(CreateOrEditQuizSectionComponent, {static: true})
  public createOrEditQuizSession!:CreateOrEditQuizSectionComponent
  public quiz_session_id_selected!: string
  constructor(
    public quizSectionService: QuizSectionService,
    public quizService: QuizService,
    private categoryService: CategoryService,
    private notificationService: NotificationService,
    private loadingJs: LoadingJsFile
  ) {
    this.loadingJs.loadingMainJs();
  }

  ngOnInit(): void {
    this.listAllQuizSection();
    this.getAllCategory();
    this.getAllQuiz();
  }

  private listAllQuizSection() {
    this.quizSectionService.listAllQuizSection().subscribe((response) => {
      this.quizSectionData = response?.data._value;
      this.quizDataToFiler = this.quizSectionData;
    });
  }

  public searchByName(name: string) {
    this.quizSectionData = [];
    this.quizSectionData = this.quizSectionService.searchQuizSessionName(
      this.quizDataToFiler,
      name
    );
  }

  public getAllCategory() {
    this.categoryService.listAll().subscribe((response) => {
      this.category = response?._value;
    
    });
  }
  public getAllQuiz() {
    this.quizService.listAllQuiz().subscribe((response) => {
      this.quiz = response?._value;
    });
  }

  createQuizSection(quizSection: IQuizSectionDTO){
    this.quizSectionService.create(quizSection).subscribe((respose)=>{
      if(respose){

        this.notificationService.showSucess("Quiz Sessão Criada")
        this.listAllQuizSection()
      }
    })
  }

  setEditarQuizSession(quizSession: IQuizSection){
    console.log(quizSession)
    this.createOrEditQuizSession.setQuizSession(quizSession)
  }

  updateQuizSection(quizSection: IQuizSection){
    
      this.quizSectionService.update(quizSection).subscribe((response)=>{
        if(response){
          this.notificationService.showSucess('Quiz sessão Actualizado')
          this.listAllQuizSection()
        }
      })
  }

  quizSelected(quiz_Session_id: string) {
    this.quiz_session_id_selected = quiz_Session_id
  }
}

