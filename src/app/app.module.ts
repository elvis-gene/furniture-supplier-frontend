import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { HomeAppComponent } from './home-app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StaffComponent } from './staff/staff.component';
import { SalesComponent } from './sales/sales.component';
import { ClienteleComponent } from './clientele/clientele.component';
import { StockControlComponent } from './stockcontrol/stock-control.component';
import { DistributionComponent } from './distribution/distribution.component';
import { StaffLoginComponent } from './login/staff-login/staff-login.component';
import { CustomerLoginComponent } from './login/customer-login/customer-login.component';
import { NavComponent } from './nav/nav.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from '../../routes';

@NgModule({
  declarations: [
    HomeAppComponent,
    StaffComponent,
    SalesComponent,
    ClienteleComponent,
    StockControlComponent,
    DistributionComponent,
    StaffLoginComponent,
    CustomerLoginComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [HomeAppComponent]
})
export class AppModule { }
