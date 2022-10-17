import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import Swal from "sweetalert2";

import { ProyectService } from "../services/proyect.service";
;

@Component({
  selector: "app-dashboard",
  templateUrl: "./full-layout.component.html",
  providers: [ProyectService],
})
export class FullLayoutComponent implements OnInit {
  public disabled: boolean = false;
  public myForm: FormGroup;
  public citys;
  private sendCity = new Subject<any>();
  sendCityObs = this.sendCity.asObservable();

  constructor(
    private router: Router,
    private ProyectService: ProyectService,
    private fb: FormBuilder
  ) {}

  public status: { isopen: boolean } = { isopen: false };

  public toggled(open: boolean): void {
    console.log("Dropdown is now: ", open);
  }

  public toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      city: ["", Validators.required],
    });
  }

  onSubmit(form: FormGroup) {
    this.ProyectService.getCitys(form.value.city).subscribe(
      (citysResponse) => {
        this.citys = citysResponse;
        this.sendCity.next(this.citys);
      },
      (err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "City not found",
        });
      }
    );
  }
}
