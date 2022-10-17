import { Component, OnInit } from "@angular/core";

import { ProyectService } from "../services/proyect.service";
import { ComunNames } from "../shared/common";

@Component({
  selector: "app-portafolio",
  templateUrl: "./portafolio.component.html",
  styleUrls: ["./style.css"],
  providers: [ProyectService],
})
export class PortafolioComponent implements OnInit {
  title = ComunNames.portafolio;
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
