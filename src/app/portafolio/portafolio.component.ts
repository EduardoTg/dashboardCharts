import { Component, OnInit } from "@angular/core";

import { FullLayoutComponent } from "../layouts/full-layout.component";
import { ComunNames } from "../shared/common";

@Component({
  selector: "app-portafolio",
  templateUrl: "./portafolio.component.html",
  styleUrls: ["./style.css"],
})
export class PortafolioComponent implements OnInit {
  title = ComunNames.portafolio;
  portafolio;
  fieldsList: any = [];
  validador: any = {};

  constructor(private fullLayoutComponent: FullLayoutComponent) {}

  ngOnInit() {
    this.fullLayoutComponent.sendCityObs.subscribe((response) => {
      this.portafolio = response;
    });
  }
}
