import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { error } from "@angular/compiler/src/util";
import { ErrorHandler, Injectable, Injector } from "@angular/core";
import { catchError, map, observable, Observable, of, tap } from "rxjs";
import { AuthenticationService } from "../services/authentication/auth.service";
import { ErroService } from "../services/Error/error.service";
import { NotificationService } from "../services/notification/notification.service";

@Injectable()
export class GlobalErrorHandle implements HttpInterceptor{
    constructor(private injector: Injector){
        
    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const errorService = this.injector.get(ErroService);
        const notifier= this.injector.get(NotificationService)
        const authServe = this.injector.get(AuthenticationService)
        let message;
        return next.handle(req).pipe(map((event: HttpEvent<any>)=>{
            if(event instanceof HttpResponse){
                if([401, 403].includes(event.status)){
                    // add Log out  from the system
                }

                if([200, 201].includes(event.status) && req.method !== 'GET'){
                    message = event.body.message
                    notifier.showSucess(message)
                    //notifier.notifyWithSuccess(message)
                }
 
            }
            

    
        
          

          
  return event
  }), catchError((error:HttpErrorResponse)=>{

         if(error instanceof HttpErrorResponse){

            if([400,404, 401].includes(error.status)){
          
                 notifier.showError(error?.error.message)
            }
              if(error.status === 0){
                message=  'Dificuldade em estabelecer conexão com o servidor'
                notifier.showError(message)
              } 
         }else {
             if(!navigator.onLine){
                message='teste'
                notifier.showError(message)
             }
         }
         console.log("error", error)
    throw new Error(error.message)
  }))
}
}