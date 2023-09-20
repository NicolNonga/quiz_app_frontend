import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from './services/authentication/auth.service';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { LoginComponent } from '../feature/feature-authentication/components/login/login.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    MainLayoutComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule   
  ],
  exports: [
    HttpClientModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers:[
 
    AuthenticationService
  ]
  


})
export class CoreModule { 
   constructor(@Optional() @SkipSelf()core:CoreModule){
             if(core){
              throw new Error("you should import core module only in thye root  module")
             }
   }
}
