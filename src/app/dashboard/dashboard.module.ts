import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ModalModule } from "ngx-bootstrap/modal";
import { NgApexchartsModule } from "ng-apexcharts";
import { DashboardComponent } from "./dashboard.component";


@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, FormsModule, ModalModule.forRoot(),NgApexchartsModule],
  entryComponents: [],
  bootstrap: [DashboardComponent],
})
export class DashboardModule {}
