import { Component, OnInit } from "@angular/core";


import { FullLayoutComponent } from "../layouts/full-layout.component";

@Component({
  selector: "app-saldos",
  templateUrl: "./saldos.component.html",
  styleUrls: ["./style.css"],
})
export class SaldosComponent implements OnInit {
  saldos;
  fieldsList: any = [];
  validador: any = {};

  constructor(
    private fullLayoutComponent: FullLayoutComponent
  ) {}

  ngOnInit() {
    this.fullLayoutComponent.sendCityObs.subscribe((response) => {
      this.saldos = response;
      
    });
  }

}
