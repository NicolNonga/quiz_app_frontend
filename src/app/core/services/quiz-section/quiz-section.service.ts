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
import { AuthenticationService } from "../authentication/auth.service";
import { UserModel } from "../../model/user";

export interface quizAttempedInterface {
    user_id: string
   quiz_section_id: string 
   option_id: string,
   time_to_complete: string
}

export interface userPontuationInterface{
  user_id: string
  quiz_section_id: string,
  total_perguntas_erradas: number
  total_pergunta_acertas: number
  puntuation: Number
}
@Injectable({
  providedIn: "root",
})
export class QuizSectionService {
    appUrl =  environment.app_url
  constructor(public http: HttpClient,
     private loadingJs: LoadingJsFile,
      public autheService: AuthenticationService) {
    this.loadingJs.loadingMainJs();
  }

  public listAllQuizSection(): Observable<any> {
    return this.http.get(`${this.appUrl}/quiz_section/all`);
  }

  public section_question (section_id: string | null):Observable<any>{

    return this.http.get(`${this.appUrl}/section_question/${section_id}`)


    
  }

  public getQuizSectionBytUser(): Observable<any>{
    const user:UserModel = this.autheService.getItemLocalStorage?.data
    
    return this.http.get(`${this.appUrl}/quiz_session/list/users/${user.id}`,)
  }

  public quizAttemped(playload: quizAttempedInterface){
    
      return this.http.post(`${this.appUrl}/quiz-attempted`, playload)

  }
  public update(quizSession: IQuizSection):Observable<any>{
    const data: any = {
      name: quizSession.name,
      category_id: quizSession.category,
      quiz_id: quizSession.quiz_id,
    };
    console.log(quizSession)
    return this.http.put(`${this.appUrl}/quiz_section/${quizSession.id}`, data);
  }

  public create(quizSectionData: IQuizSectionDTO): Observable<any> {
    return this.http.post(
      `${this.appUrl}/quiz_section`, 
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

   public getAllUserFromQuiz(quiz_section_id: string) : Observable<any> {
    return this.http.get(`${this.appUrl}/users/quiz_section/${quiz_section_id}`)
   }

   public addUserToQuizSection(users :Array<any>, quiz_sessetion_id: string){
     return this.http.post(`${this.appUrl}/quiz_session/users`, {users, quiz_sessetion_id})

   }
   public removeUserToQuizSection(user_id: string, quiz_section_id: string) {
       return  this.http.put(`${this.appUrl}/remover/user/quiz_section`, {user_id, quiz_section_id})
   }

   public saveUserPontuation(userPontuacao: userPontuationInterface): Observable<any> {
     return this.http.post(`${environment.app_url}/users/quiz_section/puntation`, userPontuacao)
   }
   public quizCompleted(user_id: string, quiz_section_id: string):Observable<any> {
    return this.http.put(`${environment.app_url}/quiz_session/users/completed`, {user_id, quiz_section_id})
   }

   public showUserPontuation(user_id: string, quiz_section_id: string):Observable<any> {
     return this.http.get(`${environment.app_url}/users/puntuation/${user_id}/${quiz_section_id}`)
   }

   public getQuizAttemped(user_id: string, quiz_section_id: string): Observable<any> {
    return this.http.get(`${environment.app_url}/quiz-attempted/${user_id}/${quiz_section_id}`)
   }
}
