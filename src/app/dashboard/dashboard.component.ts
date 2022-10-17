import { Component, OnInit } from "@angular/core";

;

import { FullLayoutComponent } from "../layouts/full-layout.component";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./style.css"],
})
export class DashboardComponent implements OnInit {
  dashboard;
  fieldsList: any = [];
  validador: any = {};

  constructor(
    private fullLayoutComponent: FullLayoutComponent
  ) {}

  ngOnInit() {
    this.fullLayoutComponent.sendCityObs.subscribe((response) => {
      this.dashboard = response;
      
    });
  }

}
