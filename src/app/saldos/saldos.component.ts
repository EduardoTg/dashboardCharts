import { Component, OnInit } from "@angular/core";

import { ProyectService } from "../services/proyect.service";
import { ComunNames } from "../shared/common";

@Component({
  selector: "app-saldos",
  templateUrl: "./saldos.component.html",
  styleUrls: ["./style.css"],
  providers: [ProyectService],
})
export class SaldosComponent implements OnInit {
  title = ComunNames.saldos;

  chartLine = {
    type: "line",
  };

  chartBar = {
    type: "bar",
  };

  xaxis = {};

  series = [];

  seriesBar = [];

  constructor(private proyectService: ProyectService) {}

  ngOnInit() {
    this.proyectService.getPopulation().subscribe((response) => {
      const dataYear = response.data.map((year) => year.Population);
      const dataMokYear = response.data.map((year) => year.Population - (year.Population*.10));
      const yearsAxisX = response.data.map((year) => year.Year);

      this.series.push({
        type: 'line',
        name: "USA Population",
        data: dataYear.reverse(),
      },
      {
        type: 'line',
        name: "México Population",
        data: dataMokYear.reverse(),
      },
      );

      this.xaxis = { categories: yearsAxisX.reverse() };
    });

    this.proyectService.getProducts().subscribe((response) => {
      console.log(response.products);
      
      const dataYear = response.products.map((product) => product.stock);
      const dataMokYear = response.products.map((product) => product.stock - 17);
      const yearsAxisX = response.products.map((product) => product.title);

      this.seriesBar.push({
        type: 'bar',
        name: "2022",
        data: dataYear.reverse(),
      },
      {
        type: 'bar',
        name: "2021",
        data: dataMokYear.reverse(),
      },
      );

      this.xaxis = { categories: yearsAxisX.reverse() };
    });
  }
}
