import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { QuizComponent } from "./feature/feature-quiz/quiz/quiz.component";
import { CategoriaComponent } from "./feature/feature-quiz/categoria/categoria.component";
// import our components

const routes: Routes = [
  {
    path: "",
    redirectTo: "dasboard",
    pathMatch: "full",
  },

  {
    path: "",
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
