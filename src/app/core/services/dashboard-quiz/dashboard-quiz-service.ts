import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})


export class DashboardService{
    constructor(private http:HttpClient){

    
    }

    public listAll():Observable<any>{
        return this.http.get(`${environment.app_url}/dashboard/all`)
    }
}