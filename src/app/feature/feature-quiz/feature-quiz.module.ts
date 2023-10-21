import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureQuizRoutingModule } from './feature-quiz-routing.module';
import { QuizComponent } from './quiz/quiz.component';
import { BrowserModule } from '@angular/platform-browser';
import { CreateOrEditQuizComponent } from './quiz/create-or-edit-quiz/create-or-edit-quiz.component';
import { CreateOrEditCategoriaComponent } from './categoria/create-or-edit-categoria/create-or-edit-categoria.component';
import { QuizSectionComponent } from './quiz-section/quiz-section.component';
import { CreateOrEditQuizSectionComponent } from './quiz-section/create-or-edit-quiz-section/create-or-edit-quiz-section.component'

@NgModule({
  declarations: [
    
  
    
            
           
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FeatureQuizRoutingModule
  ]
})
export class FeatureQuizModule { }
