import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HomeAppComponent } from './home-app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StaffComponent } from './staff/staff.component';
import { SalesComponent } from './sales/sales.component';
import { ClienteleComponent } from './clientele/clientele.component';
import { StockcontrolComponent } from './stockcontrol/stockcontrol.component';
import { DistributionComponent } from './distribution/distribution.component';
import { StaffLoginComponent } from './login/staff-login/staff-login.component';
import { CustomerLoginComponent } from './login/customer-login/customer-login.component';
import { NavComponent } from './base-ui/nav/nav.component';

@NgModule({
  declarations: [
    HomeAppComponent,
    StaffComponent,
    SalesComponent,
    ClienteleComponent,
    StockcontrolComponent,
    DistributionComponent,
    StaffLoginComponent,
    CustomerLoginComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [HomeAppComponent]
})
export class AppModule { }
