import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
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
import { MainLayoutComponent } from './core/components/main-layout/main-layout.component';
import { MainDashboardComponent } from './feature/feature-dashboard/main-dashboard/main-dashboard.component';
import { QuizComponent } from './feature/feature-quiz/quiz/quiz.component';
import { CreateOrEditQuizComponent } from './feature/feature-quiz/quiz/create-or-edit-quiz/create-or-edit-quiz.component';
import { CategoriaComponent } from './feature/feature-quiz/categoria/categoria.component';
import { CreateOrEditCategoriaComponent } from './feature/feature-quiz/categoria/create-or-edit-categoria/create-or-edit-categoria.component';
import { SharedModule } from './shared/shared.module';
import { QuizSectionComponent } from './feature/feature-quiz/quiz-section/quiz-section.component';
import { CreateOrEditQuizSectionComponent } from './feature/feature-quiz/quiz-section/create-or-edit-quiz-section/create-or-edit-quiz-section.component';
import { QuizQuestionComponent } from './feature/quiz-question/quiz-question.component';
import { DasboardQuizCountComponent } from './feature/dasboard-quiz-count/dasboard-quiz-count.component';
import { CreateOrEditQuizQuestionComponent } from './create-or-edit-quiz-question/create-or-edit-quiz-question.component';
import { CreateOrEditQuizOptionComponent } from './feature/quiz-question/create-or-edit-quiz-option/create-or-edit-quiz-option.component';
import { AddAnswersQuizQuestionComponent } from './feature/quiz-question/add-answers-quiz-question/add-answers-quiz-question.component';
@NgModule({
  declarations: [
    AppComponent,
    MainDashboardComponent,
    QuizComponent,
    CreateOrEditQuizComponent,
    CategoriaComponent,
    CreateOrEditCategoriaComponent,
    CreateOrEditQuizSectionComponent,
    QuizSectionComponent,
    QuizQuestionComponent,
    DasboardQuizCountComponent,
    CreateOrEditQuizQuestionComponent,
    CreateOrEditQuizOptionComponent,
    AddAnswersQuizQuestionComponent
    

  ],
  imports: [

    AppRoutingModule,
    CoreModule,
    SharedModule,
    Ng2IziToastModule,
    BrowserModule,
     // our Http client module
        
    
  ],
  exports: [

    CoreModule,
  ],
  providers : [
 
    {provide: HTTP_INTERCEPTORS, useClass: RetryInterceptor,multi:true},
    {
      provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true
    }
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
