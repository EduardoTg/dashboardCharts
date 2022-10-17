import { Component, OnInit } from '@angular/core';

import { FullLayoutComponent } from '../layouts/full-layout.component';
import { ComunNames } from '../shared/common';

@Component({
  selector: "app-acciones",
  templateUrl: "./acciones.component.html",
  styleUrls: ["./style.css"],
})
export class AccionesComponent implements OnInit {
  title = ComunNames.acciones;
  acciones;
  fieldsList: any = [];
  validador: any = {};

  constructor(private fullLayoutComponent: FullLayoutComponent) {}

  ngOnInit() {
    this.fullLayoutComponent.sendCityObs.subscribe((response) => {
      this.acciones = response;
    });
  }
}
