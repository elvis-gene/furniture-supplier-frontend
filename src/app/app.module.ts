import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StaffComponent } from './staff/staff.component';
import { SalesComponent } from './sales/sales.component';
import { ClienteleComponent } from './clientele/clientele.component';
import { StockControlComponent } from './stockcontrol/stock-control.component';
import { DistributionComponent } from './distribution/distribution.component';
import { StaffLoginComponent } from './login/staff-login/staff-login.component';
import { CustomerLoginComponent } from './login/customer-login/customer-login.component';
import { NavComponent } from './base/nav/nav.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from '../../routes';
import {MaterialModule} from './material/material.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import { CreateProductComponent } from './stockcontrol/products/create-product/create-product.component';
import { StoreComponent } from './store/store.component';
import { StaffHomepageComponent } from './staff/staff-homepage/staff-homepage.component';
import { JobsComponent } from './staff/jobs/jobs.component';
import { FooterComponent } from './base/footer/footer.component';
import { ProductsComponent } from './stockcontrol/products/products.component';
import { PromotionsComponent } from './sales/promotions/promotions.component';
import { AppointmentsComponent } from './clientele/appointments/appointments.component';

@NgModule({
  declarations: [
    AppComponent,
    StaffComponent,
    SalesComponent,
    ClienteleComponent,
    StockControlComponent,
    DistributionComponent,
    StaffLoginComponent,
    CustomerLoginComponent,
    NavComponent,
    CreateProductComponent,
    StoreComponent,
    StaffHomepageComponent,
    JobsComponent,
    FooterComponent,
    ProductsComponent,
    PromotionsComponent,
    AppointmentsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatSidenavModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
