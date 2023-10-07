import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../core/services/dashboard-quiz/dashboard-quiz-service';
import { LoadingJsFile } from '../../core/services/loadingJs/loadingJs.service';

@Component({
  selector: 'app-dasboard-quiz-count',
  templateUrl: './dasboard-quiz-count.component.html',
  styleUrls: ['./dasboard-quiz-count.component.css']
})
export class DasboardQuizCountComponent implements OnInit {

   public dashboardCount:any 
   public load:boolean= false
  constructor(private dashboardService:DashboardService, private loadJavascript:LoadingJsFile) { 
    this.loadJavascript.loadingMainJs()
  }

  ngOnInit(): void {
    this.getAllDashboard()
  }

  getAllDashboard(){
    this.load= true
    this.dashboardService.listAll().subscribe((response)=>{
      console.log(response)
      this.dashboardCount=  response?._value
      this.load= false
    })
  }

}
