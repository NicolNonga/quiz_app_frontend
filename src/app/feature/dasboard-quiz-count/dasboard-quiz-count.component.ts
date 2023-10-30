import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../core/services/dashboard-quiz/dashboard-quiz-service';
import { LoadingJsFile } from '../../core/services/loadingJs/loadingJs.service';
import { AuthenticationService } from 'src/app/core/services/authentication/auth.service';
import { UserModel } from 'src/app/core/model/user';

@Component({
  selector: 'app-dasboard-quiz-count',
  templateUrl: './dasboard-quiz-count.component.html',
  styleUrls: ['./dasboard-quiz-count.component.css']
})
 

export class DasboardQuizCountComponent implements OnInit {

   public dashboardCount:any 
   public load:boolean= false
   public userLogado!: UserModel;
  constructor(private dashboardService:DashboardService, 
    private loadJavascript:LoadingJsFile,
    private autheService: AuthenticationService
    ) { 
    this.loadJavascript.loadingMainJs()
  }

  ngOnInit(): void {
    this.getAllDashboard()
    this.userLogado= this.autheService.getItemLocalStorage?.data
    console.log(this.userLogado)
  
  }

  getAllDashboard(){
    this.load= true
    this.dashboardService.listAll().subscribe((response)=>{
   
      this.dashboardCount=  response?._value
      this.load= false
    })
  }

}


