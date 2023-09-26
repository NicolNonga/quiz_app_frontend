import { Component, OnInit } from '@angular/core';
import { SmartComponent } from 'src/app/core/components/smart-component/smart-component.component';
import { MainService } from '../service/main.service';
import { IuserIntern } from '../../interface/userIntern.interface';
import { AuthenticationService } from 'src/app/core/services/authentication/auth.service';
import { IUser } from 'src/app/core/interface/user.interface';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent } from '@angular/router';
import { RoutingService } from 'src/app/core/services/router/routing.service';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css']
})
export class MainDashboardComponent extends SmartComponent implements OnInit {

  public userIntern!: IuserIntern;
  public userLoggin!: IUser | null;
  public subscriptions: Array<any> =  []
  public showOverlay = true;
  public layout = {
    customLayout: false,
    layoutNavigationTop: true
  }

  constructor(
    private authService:AuthenticationService,
    private router: Router,
    public routingService: RoutingService
    ) { 
    super()
    this.userLoggin= this.authService.userValue
  }

  ngOnInit(): void {
      this.router.events.subscribe((event: RouterEvent | any) => {
        
         this.navigationInterceptor(event)
      })

      this.subscriptions.push(this.routingService.onChange.subscribe((value:any)=>{

        if (value && value[value.length - 1]) {
          /*   this.titleService.setTitle(this.getTitle(value[value.length - 1].data['title']));
            this.header = value[value.length - 1].data['title']; */
            const layout = value[value.length - 1].data['layout'];
            if (layout != undefined) {
              this.layout = layout;
            }
         /*    this.description = value[value.length - 1].data['description']; */
          }
        /*   this.changeDetectorRef.markForCheck(); */

        
      }))

      this.subscriptions.push(this.router.events.subscribe((routeEvent: RouterEvent | any) => {
        if (routeEvent instanceof NavigationStart) {
        /*   this.navigationEnd = false; */
        }
        if (routeEvent instanceof NavigationEnd) {
        /*   this.navigationEnd = true; */
        }
      }));



      
  }


  navigationInterceptor(event: RouterEvent): void {

    if (event instanceof NavigationStart) {
      this.showOverlay = true;
     // this.spinner.show();
    }

    if (event instanceof NavigationEnd) {
      this.showOverlay = false;
      //this.spinner.hide();
    }

    // Set loading state to false in both of the below events to hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      this.showOverlay = false;
      //this.spinner.hide();
    }

    if (event instanceof NavigationError) {
      this.showOverlay = false;
      //this.spinner.hide();
    }

  }
  public  logout(){
    this.authService.logout()
  }




}
