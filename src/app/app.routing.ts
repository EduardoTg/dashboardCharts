import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FullLayoutComponent } from "./layouts/full-layout.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AccionesComponent } from "./acciones/acciones.component";
import { SaldosComponent } from "./saldos/saldos.component";
import { PortafolioComponent } from "./portafolio/portafolio.component";
import { MovimientosComponent } from "./movimientos/movimientos.component";
import { ComunNames } from "../app/shared/common";


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
        path: ComunNames.dashboard ,
        component: DashboardComponent,
      },
      {
        path: ComunNames.acciones,
        component: AccionesComponent,
      },
      {
        path: ComunNames.movimientos,
        component: MovimientosComponent,
      },
      {
        path: ComunNames.portafolio,
        component: PortafolioComponent,
      },
      {
        path: ComunNames.saldos,
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
