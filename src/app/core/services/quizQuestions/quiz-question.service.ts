import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})

export class QuizQuestionService {
    constructor(private http: HttpClient){

    }

    listAllQuizQuestion(): Observable<any> {
        return this.http.get(`${environment.app_url}/quiz_question`)
    }

    listQuizOptionByQuizQuestionID(quizQuestionId: string): Observable<any>{
        return this.http.get(`${environment.app_url}/quiz_option/by_quiz_question?quiz_question_id=${quizQuestionId}`)
    }

    createQuizQuestion(data: any):Observable<any>{
        return this.http.post(`${environment.app_url}/quiz_question`, data)
    }

}