import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { QuizComponent } from "./feature/feature-quiz/quiz/quiz.component";
import { CategoriaComponent } from "./feature/feature-quiz/categoria/categoria.component";
import { QuizSectionComponent } from "./feature/feature-quiz/quiz-section/quiz-section.component";
import { QuizQuestionComponent } from "./feature/quiz-question/quiz-question.component";
import { DasboardQuizCountComponent } from "./feature/dasboard-quiz-count/dasboard-quiz-count.component";
import { QuestionQuizComponent } from "./shared/components/question-quiz/question-quiz.component";
import { UtilizadoresComponent } from "./feature/utilizadores/utilizadores.component";
import { UtilizadorQuizSectionComponent } from "./shared/components/utilizador-quiz-section/utilizador-quiz-section.component";
import { FinalResultComponent } from "./shared/components/final-result/final-result.component";
// import our components

const routes: Routes = [
  {
    path: "",
    redirectTo: "dasboard",
    pathMatch: "full",
  },

  {
    path: "",
    component: DasboardQuizCountComponent,
    data: {
      title: "",
      layout: {
        customLayout: true,
        layoutNavigationTop: true,
      },
      
    },
    loadChildren: () =>
      import("./feature/feature-dashboard/feature-dashboard.module").then(
        (m) => m.FeatureDashboardModule
      ),
  },
  {
    path: "all_quiz",
    component: QuizComponent,
    data: {
      title: "Quiz",
      layout: {
        customLayout: true,
        layoutNavigationTop: false,
      },
    },
  },

  {
    path: 'all_category', 
    component: CategoriaComponent,
    data: {
      title: "Quiz",
      layout: {
        customLayout: true,
        layoutNavigationTop: false,
      },
    },
  },
  {
    path:'all_quiz_section',
    component: QuizSectionComponent,
    data: {
      title: "Quiz",
      layout: {
        customLayout: true,
        layoutNavigationTop: false,
      },
    },
  },

  {
    path:'all_quiz_question',
    component: QuizQuestionComponent,
    data: {
      title: "Quiz",
      layout: {
        customLayout: true,
        layoutNavigationTop: false,
      },
    },
  },


  {
    path:'users',
    component: UtilizadoresComponent,
    data: {
      title: "utilizadores",
      layout: {
        customLayout: true,
        layoutNavigationTop: false,
      },
    },
  },


  {
    path:'section-question/:id',
    component: QuestionQuizComponent,
    data: {
      title: "question Section",
      layout: {
        customLayout: true,
        layoutNavigationTop: false,
      },
    },
  },

  {
    path:'quiz-section-final-result/:user_id/:quiz_section_id',
    component: FinalResultComponent,
    data: {
      title: "question Section",
      layout: {
        customLayout: true,
        layoutNavigationTop: false,
      },
    },
  },
  {
    path:'quiz-section-utilizador/:id',
    component: UtilizadorQuizSectionComponent,
    data: {
      title: "Quiz secção de um utilizador",
      layout: {
        customLayout: true,
        layoutNavigationTop: false,
      },
    },
  },
  {
    path: "",
    data: {
      title: "authenticacao",
    },
    children: [
      {
        path: "login",
        data: {
          title: "login",
          layout: {
            customLayout: false,
            layoutNavigationTop: false,
          },
        },
        loadChildren: () =>
          import(
            "./feature/feature-authentication/feature-authentication.module"
          ).then((m) => m.FeatureAuthenticationModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
