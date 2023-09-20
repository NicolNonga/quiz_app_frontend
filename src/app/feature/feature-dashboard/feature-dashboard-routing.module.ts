import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { AuthGuard } from 'src/app/core/guards/auth.guards';

const routes: Routes = [
{
  path:'',
  component: MainDashboardComponent,
  canActivate: [AuthGuard],  
  data: {
    title: "Página Principal",
    layout:{
      customLayout: true,
      layoutNavigationTop: false
    }
  }
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureDashboardRoutingModule { }
