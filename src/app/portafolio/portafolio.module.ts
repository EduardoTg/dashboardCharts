import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ModalModule } from "ngx-bootstrap/modal";

import { PortafolioComponent } from "./portafolio.component";


@NgModule({
  declarations: [PortafolioComponent],
  imports: [CommonModule, FormsModule, ModalModule.forRoot()],
  entryComponents: [],
  bootstrap: [PortafolioComponent],
})
export class PortafolioModule {}
