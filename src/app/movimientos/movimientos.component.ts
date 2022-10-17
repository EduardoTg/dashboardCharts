import { Component, OnInit } from "@angular/core";

;

import { FullLayoutComponent } from "../layouts/full-layout.component";

@Component({
  selector: "app-movimientos",
  templateUrl: "./movimientos.component.html",
  styleUrls: ["./style.css"],
})
export class MovimientosComponent implements OnInit {
  movimientos;
  fieldsList: any = [];
  validador: any = {};

  constructor(
    private fullLayoutComponent: FullLayoutComponent
  ) {}

  ngOnInit() {
    this.fullLayoutComponent.sendCityObs.subscribe((response) => {
      this.movimientos = response;
      
    });
  }

}
