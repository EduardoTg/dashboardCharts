import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-dashboard",
  templateUrl: "./full-layout.component.html",
})
export class FullLayoutComponent implements OnInit {
  public disabled: boolean = false;
  public myForm: FormGroup;

  constructor() {}

  public status: { isopen: boolean } = { isopen: false };

  public toggled(open: boolean): void {
    console.log("Dropdown is now: ", open);
  }

  public toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }

  ngOnInit(): void {}
}
