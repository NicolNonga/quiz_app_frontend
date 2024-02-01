import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormFieldComponent } from "./components/form-field/form-field.component";
import { InputDirective } from "../core/directive/input.directive";
import { HeaderInternComponent } from "../core/components/header-intern/header-intern.component";
import { SiderBarComponent } from "../core/components/sidebar/siderbar.component";

import { RouterModule } from "@angular/router";
import { GenericButtonComponent } from "./components/generic-button/generic-button.component";
import { CardQuizComponent } from "./components/card-quiz/card-quiz.component";
import { BannerComponent } from './components/banner/banner.component';
import { SearhComponent } from './components/searh/searh.component';
import { FormsModule } from "@angular/forms";
import { CardQuizSessionComponent } from './components/card-quiz-session/card-quiz-session.component';
import { GenericSelectComponent } from './components/generic-select/generic-select.component';
import { CardQuizQuestionComponent } from './components/card-quiz-question/card-quiz-question.component';
import { AdminDasboardComponent } from './components/admin-dasboard/admin-dasboard.component';
import { StudandDashboardComponent } from './components/studand-dashboard/studand-dashboard.component';
import { QuestionQuizComponent } from './components/question-quiz/question-quiz.component';
import { QuizQuestionDescriptionComponent } from './components/question-quiz/quiz-question-description/quiz-question-description.component';

@NgModule({
  declarations: [
    FormFieldComponent,
    InputDirective,
    HeaderInternComponent,
    SiderBarComponent,
    GenericButtonComponent,
    CardQuizComponent,
    BannerComponent,
    SearhComponent,
    CardQuizSessionComponent,
    GenericSelectComponent,
    CardQuizQuestionComponent,
    AdminDasboardComponent,
    StudandDashboardComponent,
    QuestionQuizComponent,
    QuizQuestionDescriptionComponent,
    
  ],
  imports: [CommonModule, RouterModule,    FormsModule],
  exports: [
    FormFieldComponent,
    InputDirective,
    HeaderInternComponent,
    SiderBarComponent,
    GenericButtonComponent,
    CardQuizComponent,
    BannerComponent,
    SearhComponent,
    CardQuizSessionComponent,
    GenericSelectComponent,
    CardQuizQuestionComponent,
    AdminDasboardComponent,
    StudandDashboardComponent
  ],
})
export class SharedModule {}
