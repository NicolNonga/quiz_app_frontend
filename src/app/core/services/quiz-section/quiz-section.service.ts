import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { BaseHttpService } from "../http/base.http.service";
import { environment } from "src/environments/environment";
import { Injectable } from "@angular/core";
import { LoadingJsFile } from "../loadingJs/loadingJs.service";
import {
  IQuizSection,
  IQuizSectionDTO,
} from "src/app/feature/feature-quiz/quiz-section/interfaces/quiz_section.interfaces";

@Injectable({
  providedIn: "root",
})
export class QuizSectionService {
  constructor(public http: HttpClient, private loadingJs: LoadingJsFile) {
    this.loadingJs.loadingMainJs();
  }

  public listAllQuizSection(): Observable<any> {
    return this.http.get(`${environment.app_url}/quiz_section/all`);
  }

  public section_question (section_id: string | null):Observable<any>{

    return this.http.get(`${environment.app_url}/section_question/${section_id}`)

  }
  public update(quizSession: IQuizSection):Observable<any>{
    const data: any = {
      name: quizSession.name,
      category_id: quizSession.category,
      quiz_id: quizSession.quiz_id,
    };
    console.log(quizSession)
    return this.http.put(`${environment.app_url}/quiz_section/${quizSession.id}`, data);
  }

  public create(quizSectionData: IQuizSectionDTO): Observable<any> {
    return this.http.post(
      `${environment.app_url}/quiz_section`,
      quizSectionData
    );
  }

  public searchQuizSessionName(
    quizSessionArray: IQuizSection[],
    quiz_sectionName: string
  ) {
    let quizSection: Array<IQuizSection> = [];

    for (let quiz_section of quizSessionArray) {
      if (
        quiz_section.name
          .toLocaleLowerCase()
          .search(quiz_sectionName.toLocaleLowerCase()) > -1
      ) {
        quizSection.push(quiz_section);
      }
    }

    return quizSection;
  }
}
