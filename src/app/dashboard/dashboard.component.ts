import { Component, OnInit } from "@angular/core";

import { ProyectService } from "../services/proyect.service";
import { ComunNames } from "../shared/common";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./style.css"],
  providers: [ProyectService],
})
export class DashboardComponent implements OnInit {
  title = ComunNames.dashboard;

  chartLine = {
    type: "line",
  };

  chartBar = {
    type: "bar",
  };

  titleChart = {
    text: "Population",
  };

  xaxis = {};

  series = [];

  constructor(private proyectService: ProyectService) {}

  ngOnInit() {
    this.proyectService.getPopulation().subscribe((response) => {
      const dataYear = response.data.map((year) => year.Population);
      const yearsAxisX = response.data.map((year) => year.Year);

      this.series.push({
        name: "Population",
        data: dataYear.reverse(),
      });

      this.xaxis = { categories: yearsAxisX.reverse() };

    });
  }
}
