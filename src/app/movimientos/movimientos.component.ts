import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { ProyectService } from "../services/proyect.service";
import { ComunNames } from "../shared/common";

@Component({
  selector: "app-movimientos",
  templateUrl: "./movimientos.component.html",
  styleUrls: ["./style.css"],
  providers: [ProyectService],
})
export class MovimientosComponent implements OnInit {
  title = ComunNames.movimientos;
  
  myForm: FormGroup;

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

  constructor(private proyectService: ProyectService, private fb: FormBuilder) {}

  ngOnInit() {
    this.getData();
    this.myForm = this.fb.group({
      name: ["", Validators.required],
    });
  }

  getData(): void {

  }

  onSubmit(){
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
