import { Component, OnInit } from "@angular/core";

import { FullLayoutComponent } from "../layouts/full-layout.component";
import { ComunNames } from "../shared/common";

@Component({
  selector: "app-saldos",
  templateUrl: "./saldos.component.html",
  styleUrls: ["./style.css"],
})
export class SaldosComponent implements OnInit {
  title = ComunNames.saldos;
  saldos;
  fieldsList: any = [];
  validador: any = {};

  constructor(private fullLayoutComponent: FullLayoutComponent) {}

  ngOnInit() {
    this.fullLayoutComponent.sendCityObs.subscribe((response) => {
      this.saldos = response;
    });
  }
}
