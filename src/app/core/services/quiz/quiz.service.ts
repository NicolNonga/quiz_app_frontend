import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {
  QuizDTO,
  QuizInterface,
} from "src/app/feature/feature-quiz/quiz/interface/quiz.interface";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class QuizService {
  constructor(private http: HttpClient) {}

  listAllQuiz(): Observable<any> {
    return this.http.get(`${environment.app_url}/quiz/all`);
  }

  create(quizData: QuizDTO): Observable<any> {
    return this.http.post(`${environment.app_url}/quiz`, quizData);
  }

  filterQuiz(
    quizArray: QuizInterface[],
    quiz_nome: string
  ): QuizInterface[] | [] {
    let quizFilter: Array<QuizInterface> = [];
    for (let quiz of quizArray) {
      if (
        quiz.name.toLocaleLowerCase().search(quiz_nome.toLocaleLowerCase()) > -1
      ) {
        quizFilter.push(quiz);
      }
    }

    return quizFilter;
  }
}
