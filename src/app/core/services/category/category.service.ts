import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ICategoryDTO } from "src/app/feature/feature-quiz/categoria/interface/category.interface";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})

export class CategoryService {
    constructor(private http : HttpClient){

    }

    listAll(): Observable<any> {
        return this.http.get(`${environment.app_url}/category/all`)
    }

     create(category: ICategoryDTO): Observable<any>{
        return this.http.post(`${environment.app_url}/category`, category)
     }
    
}