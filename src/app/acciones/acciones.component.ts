import { Component, OnInit } from "@angular/core";

import { City } from "../shared/common";

import { FullLayoutComponent } from "../layouts/full-layout.component";

@Component({
  selector: "app-citys",
  templateUrl: "./citys.component.html",
  styleUrls: ["./style.css"],
})
export class CitysComponent implements OnInit {
  citys: City;
  fieldsList: any = [];
  validador: any = {};

  constructor(
    private fullLayoutComponent: FullLayoutComponent
  ) {}

  ngOnInit() {
    this.fullLayoutComponent.sendCityObs.subscribe((response) => {
      this.citys = response;
      
    });
  }

}
