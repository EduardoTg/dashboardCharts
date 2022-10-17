import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from "@angular/platform-browser";
import { LocationStrategy, HashLocationStrategy } from "@angular/common";
import { AppComponent } from "./app.component";
import { NAV_DROPDOWN_DIRECTIVES } from "./shared/nav-dropdown.directive";
import { SIDEBAR_TOGGLE_DIRECTIVES } from "./shared/sidebar.directive";
import { AsideToggleDirective } from "./shared/aside.directive";
import { FormsModule, ReactiveFormsModule  } from "@angular/forms";
// Routing Module
import { AppRoutingModule } from "./app.routing";
// Layouts
import { FullLayoutComponent } from "./layouts/full-layout.component";
// services
import { CityService } from "./services/citys.service";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
// components
import { CitysModule } from "./dashboard/dashboard.module";
import { SaldosModule } from "./saldos/saldos.module";
//Styles
import { ButtonsModule } from 'ngx-bootstrap/buttons';
@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CitysModule,
    SaldosModule,
    ButtonsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    FullLayoutComponent,
    NAV_DROPDOWN_DIRECTIVES,
    SIDEBAR_TOGGLE_DIRECTIVES,
    AsideToggleDirective,
  ],
  providers: [
    CityService,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}