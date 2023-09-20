import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { error } from "@angular/compiler/src/util";
import { ErrorHandler, Injectable, Injector } from "@angular/core";
import { catchError, map, Observable, tap } from "rxjs";
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
        return next.handle(req).pipe(map((event:HttpEvent<any>)=>{
                if(event instanceof HttpResponse){
                    if([401, 403].includes(event.status)){
                        // should do logout from the system
                        authServe.logout()
                    }
                    if([200, 201].includes(event.status)){
                         message= event.body.message
                         notifier.showSucess(message)
                    }
                }
            return event
        }),catchError((error:HttpErrorResponse)=>{
            if(error instanceof HttpErrorResponse){
                message= errorService.getServeMessage(error);
                 notifier.showError(message)
                 console.log('teste3')
                //notifier.showError(message);
            }
            else {
                message= errorService.getClientMessage(error)
              
                notifier.showError(message)
            }
           /*   message= errorService.getServeMessage(error)
              notifier.showError(message) */
               throw new Error(error?.message)
        }))
    }

}