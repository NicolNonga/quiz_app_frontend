import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { AuthenticationService } from "../services/authentication/auth.service";

@Injectable()
export class JwtInterceptor implements HttpInterceptor{
      constructor(private interjector: Injector){
        

        

      }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const authService = this.interjector.get(AuthenticationService);
        const user = authService.userValue;
        const isLoggedIn= user?.token;
        const isApiUrl= req.url.startsWith(environment.app_url);

          if(isLoggedIn && isApiUrl){
            req= req.clone({
                setHeaders:{
                    Authorization: `Bearer ${user.token?.token}`
                }
            });
          }
          return next.handle(req)
    }

}