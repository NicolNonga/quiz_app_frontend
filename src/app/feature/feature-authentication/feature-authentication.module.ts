import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureAuthenticationRoutingModule } from './feature-authentication-routing.module';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';


@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent,
    AuthenticationComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    FeatureAuthenticationRoutingModule
  ]
})
export class FeatureAuthenticationModule { }
