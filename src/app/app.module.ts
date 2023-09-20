import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
// importing our HttpClientModule




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { GlobalErrorHandle } from './core/interceptors/globalErrorHandler.interceptor';
import { Ng2IziToastModule } from 'ng2-izitoast'
import { RetryInterceptor } from './core/interceptors/retry.interceptor';
import { JwtInterceptor } from './core/interceptors/JwtInterceptor.interceptor';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    Ng2IziToastModule
     // our Http client module
        
    
  ],
  exports: [
    CoreModule,
  ],
  providers : [
    {
      provide: HTTP_INTERCEPTORS, useClass: GlobalErrorHandle,
      multi:true
    },
    {provide: HTTP_INTERCEPTORS, useClass: RetryInterceptor,multi:true},
    {
      provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true
    }
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
