import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NgApexchartsModule } from "ng-apexcharts";
import { ModalModule } from "ngx-bootstrap/modal";

import { AccionesComponent } from "./acciones.component";

@NgModule({
  declarations: [AccionesComponent],
  imports: [
    CommonModule,
    FormsModule,
    ModalModule.forRoot(),
    NgApexchartsModule,
  ],
  entryComponents: [],
  bootstrap: [AccionesComponent],
})
export class AccionesModule {}
