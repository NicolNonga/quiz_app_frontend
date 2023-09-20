import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { AuthGuard } from 'src/app/core/guards/auth.guards';

const routes: Routes = [
  {
    path: '',
    component: AuthenticationComponent,
  /*  canActivate: [AuthGuard],    */
    data: {
      title: "Authentication"
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureAuthenticationRoutingModule { }
