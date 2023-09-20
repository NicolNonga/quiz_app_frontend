import { Component, OnInit } from '@angular/core';
import { SmartComponent } from 'src/app/core/components/smart-component/smart-component.component';
import { MainService } from '../service/main.service';
import { IuserIntern } from '../../interface/userIntern.interface';
import { AuthenticationService } from 'src/app/core/services/authentication/auth.service';
import { IUser } from 'src/app/core/interface/user.interface';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css']
})
export class MainDashboardComponent extends SmartComponent implements OnInit {

  public userIntern!: IuserIntern;
  public userLoggin!: IUser | null;
  constructor(private mainService:MainService, private authService:AuthenticationService) { 
    super()
    this.userLoggin= this.authService.userValue
  }

  ngOnInit(): void {

  }

  getUserIntern(){
    this.mainService.getUserIntern(this.userLoggin?.user?.id).subscribe(user=>{
    this.userIntern= user;
    })
  }

  public  logout(){
    this.authService.logout()
  }
}
