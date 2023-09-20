import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DumbComponent } from '../dumb-component/dumb-component.compoent';
import { AuthenticationService } from '../../services/authentication/auth.service';
import { IuserIntern } from 'src/app/feature/interface/userIntern.interface';

@Component({
  selector: 'app-header-intern',
  templateUrl: './header-intern.component.html',
  styleUrls: ['./header-intern.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderInternComponent extends DumbComponent  {
   @Input () userIntern!: IuserIntern
   @Output() logoutEvent= new  EventEmitter<any>()
  constructor(){
    super()
    this.loadJsFile("assets/js/app.bundle.min.js")
   
  }

  logout(){
    this.logoutEvent.emit()
  }
  public loadJsFile(url:string) {  
    let node = document.createElement('script');  
    node.src = url;  
    node.type = 'text/javascript';  
    document.getElementsByTagName('head')[0].appendChild(node);  
  }  

}
