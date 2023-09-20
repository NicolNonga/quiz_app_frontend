import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IuserIntern } from "../../interface/userIntern.interface";
import { environment } from "src/environments/environment";

 @Injectable({providedIn:'root'})

 export class MainService{

    constructor(private http: HttpClient){

    }

    getUserIntern(user_id:number | any):Observable<IuserIntern>{
             return this.http.get<IuserIntern>(`${environment.app_url}/users/intern/${user_id}`)
    }
 }