import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import our components


const routes: Routes = [

  {
    path: '',
    redirectTo:'dasboard',
    pathMatch: 'full'
  },

   {
    path: '',
    data:{
      title: ''
    },
    loadChildren: ()=> import('./feature/feature-dashboard/feature-dashboard.module').then((m)=>m.FeatureDashboardModule)

   },

   {
    path:'',
    data:{
      title: 'authenticacao'
    },
    children: [
      {
        path: 'login',
        data: {
          title:"login"
        },
        loadChildren: () =>import('./feature/feature-authentication/feature-authentication.module').then((m)=> m.FeatureAuthenticationModule)
      }
    ]
   }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
