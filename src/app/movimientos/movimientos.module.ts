import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ModalModule } from "ngx-bootstrap/modal";

import { CitysComponent } from "./movimientos.component";


@NgModule({
  declarations: [CitysComponent],
  imports: [CommonModule, FormsModule, ModalModule.forRoot()],
  entryComponents: [],
  bootstrap: [CitysComponent],
})
export class CitysModule {}
