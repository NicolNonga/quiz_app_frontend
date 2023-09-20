import { Injectable } from "@angular/core";
import { Ng2IzitoastService } from 'ng2-izitoast'
@Injectable({
    providedIn: 'root'
})

export class NotificationService {
    constructor(private notifyService: Ng2IzitoastService)
    {

    }

    showSucess(message: string): void{
        //todo  handle message success every operation of the system
        //  show the message here
        this.notifyService.success({title: 'success', message: message, position:'topRight'})
    }

    showError(message: string): void {
     
        this.notifyService.error({title: 'info', message: message, position:'topRight'})
        //  show the message here use wherever you what to
    }
}