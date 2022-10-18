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
      const dataYear = response.data.map((year) => year.Population / 6);
      const dataMonthly = response.data.map((year) => year.Population / 12);
      const dataDayly = response.data.map((year) => year.Population / 365);
      const yearsAxisX = response.data.map((year) => year.Year);

      this.series.push(
        {
          type: "bar",
          name: "Year",
          data: dataYear.reverse(),
        },
        {
          type: "bar",
          name: "Month",
          data: dataMonthly.reverse(),
        },
        {
          type: "bar",
          name: "Day",
          data: dataDayly.reverse(),
        }
      );

      this.xaxis = { categories: yearsAxisX.reverse() };
    });
  }
}
