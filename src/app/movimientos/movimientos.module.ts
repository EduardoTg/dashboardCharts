import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NgApexchartsModule } from "ng-apexcharts";
import { ModalModule } from "ngx-bootstrap/modal";
import { ReactiveFormsModule } from '@angular/forms';
import { MovimientosComponent } from "./movimientos.component";

@NgModule({
  declarations: [MovimientosComponent],
  imports: [
    CommonModule,
    FormsModule,
    ModalModule.forRoot(),
    NgApexchartsModule,
    ReactiveFormsModule
  ],
  entryComponents: [],
  bootstrap: [MovimientosComponent],
})
export class MovimientosModule {}
