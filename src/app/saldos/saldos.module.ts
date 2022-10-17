import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ModalModule } from "ngx-bootstrap/modal";

import { SaldosComponent } from "./saldos.component";


@NgModule({
  declarations: [SaldosComponent],
  imports: [CommonModule, FormsModule, ModalModule.forRoot()],
  entryComponents: [],
  bootstrap: [SaldosComponent],
})
export class SaldosModule {}
