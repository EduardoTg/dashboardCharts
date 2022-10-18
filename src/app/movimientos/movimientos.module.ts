import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NgApexchartsModule } from "ng-apexcharts";
import { ModalModule } from "ngx-bootstrap/modal";

import { MovimientosComponent } from "./movimientos.component";

@NgModule({
  declarations: [MovimientosComponent],
  imports: [
    CommonModule,
    FormsModule,
    ModalModule.forRoot(),
    NgApexchartsModule,
  ],
  entryComponents: [],
  bootstrap: [MovimientosComponent],
})
export class MovimientosModule {}
