import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FullLayoutComponent } from "./layouts/full-layout.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AccionesComponent } from "./acciones/acciones.component";
import { SaldosComponent } from "./saldos/saldos.component";
import { PortafolioComponent } from "./portafolio/portafolio.component";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "home",
    component: FullLayoutComponent,
    children: [
      {
        path: "dashboard",
        component: DashboardComponent,
      },
      {
        path: "acciones",
        component: AccionesComponent,
      },
      {
        path: "movimientos",
        component: DashboardComponent,
      },
      {
        path: "portafolio",
        component: PortafolioComponent,
      },
      {
        path: "saldos",
        component: SaldosComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
