import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class ErroService {
    getClientMessage(error: HttpErrorResponse): string {
        if(!navigator.onLine){
            //todo ->  verificar melhor forma de ver quando que user esta   internet ou não 
            return 'Sem Internte'
        }


        
    
        
        return error.message ? error.message : error.toString();
    }

    getClientStack(error:Error): string{
        return error.stack?.toString() || '';
    }

    getServeMessage(error: HttpErrorResponse):string {

         
        if(error.status === 0){
            return 'Dificuldades em estabelecer conexão com o servidor.'
           }
        return   error.error?.message;
    }
}