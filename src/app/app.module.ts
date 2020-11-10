import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StaffComponent } from './staff/staff.component';
import { SalesComponent } from './sales/sales.component';
import { ClienteleComponent } from './clientele/clientele.component';
import { StockcontrolComponent } from './stockcontrol/stockcontrol.component';
import { DistributionComponent } from './distribution/distribution.component';

@NgModule({
  declarations: [
    AppComponent,
    StaffComponent,
    SalesComponent,
    ClienteleComponent,
    StockcontrolComponent,
    DistributionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
