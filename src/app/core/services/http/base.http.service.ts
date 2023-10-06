import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export class BaseHttpService {

    constructor (private readonly http: HttpClient){

    }

    getRequest(url: string): Observable<any>{
        return this.http.get(url);
    }

    postRequest(payload:any, url: string){
              return this.http.post(payload, url)
    }
}