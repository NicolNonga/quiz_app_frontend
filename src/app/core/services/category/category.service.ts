import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ICategoryDTO, Icategory } from "src/app/feature/feature-quiz/categoria/interface/category.interface";
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
    
     public searchCateryName(categoryArray: Icategory [], categoryName: string){
        let categoryFilter: Array<Icategory> =  [];
        for(let category of categoryArray){
            if(category.name.toLocaleLowerCase().search(categoryName.toLocaleLowerCase()) > -1){
                categoryFilter.push(category)
            }

        }

        return categoryFilter;
     }
}