import {Routes} from '@angular/router';
import {HomeAppComponent} from './src/app/home-app.component';
import {StaffComponent} from './src/app/staff/staff.component';
import {StockControlComponent} from './src/app/stockcontrol/stock-control.component';
import {SalesComponent} from './src/app/sales/sales.component';
import {DistributionComponent} from './src/app/distribution/distribution.component';
import {ClienteleComponent} from './src/app/clientele/clientele.component';
import {StaffLoginComponent} from './src/app/login/staff-login/staff-login.component';

export let appRoutes: Routes = [
  {path: 'staff', component: StaffComponent},
  // {path: 'staff', component: StaffComponent}, todo: staff details component
  {path: 'stock', component: StockControlComponent},
  // {path: 'stock/products', component: StockControlComponent}, todo:
  {path: 'sales', component: SalesComponent},
  {path: 'sales/promotions', component: SalesComponent},
  {path: 'sales/cart', component: SalesComponent},
  {path: 'deliveries', component: DistributionComponent},
  {path: 'customers', component: ClienteleComponent},
  {path: 'staff-login', component: StaffLoginComponent},

  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

// Suggestions: ctrl + space
// Add detail components

// Have Promotions under Sales
// Have Products under stock
// Appointments to be under customers.
