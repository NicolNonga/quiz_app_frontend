import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FeatureDashboardRoutingModule } from "./feature-dashboard-routing.module";
import { MainDashboardComponent } from "./main-dashboard/main-dashboard.component";
import { SharedModule } from "src/app/shared/shared.module";
import { HeaderInternComponent } from "src/app/core/components/header-intern/header-intern.component";

@NgModule({
  declarations: [],
  imports: [CommonModule, FeatureDashboardRoutingModule, SharedModule ],
})
export class FeatureDashboardModule {}
