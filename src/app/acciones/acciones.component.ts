import { Component, OnInit } from "@angular/core";

import { ProyectService } from "../services/proyect.service";
import { ComunNames } from "../shared/common";

@Component({
  selector: "app-acciones",
  templateUrl: "./acciones.component.html",
  styleUrls: ["./style.css"],
  providers: [ProyectService],
})
export class AccionesComponent implements OnInit {
  title = ComunNames.acciones;

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
