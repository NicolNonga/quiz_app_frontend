import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { delay, Observable, retry, timer } from "rxjs";

@Injectable()
export class RetryInterceptor implements HttpInterceptor {
    constructor(){
        
    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       return next.handle(req).pipe(
        retry({
            count: 3, delay: this.shouldRetry
        })
       )
    }

     shouldRetry(error: HttpErrorResponse){
        if(error.status >= 500){
            return timer(1000)
        }
        throw error
     }
}