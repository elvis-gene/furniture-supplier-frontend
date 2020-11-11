import {Routes} from '@angular/router';
import {AppComponent} from './src/app/app.component';
import {StaffComponent} from './src/app/staff/staff.component';
import {StockControlComponent} from './src/app/stockcontrol/stock-control.component';
import {SalesComponent} from './src/app/sales/sales.component';
import {DistributionComponent} from './src/app/distribution/distribution.component';
import {ClienteleComponent} from './src/app/clientele/clientele.component';
import {StaffLoginComponent} from './src/app/login/staff-login/staff-login.component';
import {CreateProductComponent} from './src/app/stockcontrol/create-product/create-product.component';
import {StoreComponent} from './src/app/sales/store/store.component';
import {StaffHomepageComponent} from './src/app/staff/staff-homepage/staff-homepage.component';

export let appRoutes: Routes = [
  {path: 'staff', component: StaffHomepageComponent},
  {path: 'store', component: StoreComponent},
  {path: 'staff/stock', component: StockControlComponent},
  // {path: 'stock/products', component: StockControlComponent}, todo:
  {path: 'staff/sales', component: SalesComponent},
  {path: 'staff/sales/promotions', component: SalesComponent},
  {path: 'staff/deliveries', component: DistributionComponent},
  {path: 'staff/customers', component: ClienteleComponent},
  {path: 'staff-login', component: StaffLoginComponent},
  {path: 'staff/stock/products/new', component: CreateProductComponent},
  {path: 'staff/employees', component: StaffComponent},
  {path: '', redirectTo: '/store', pathMatch: 'full'}
];

// Suggestions: ctrl + space
// Add detail components

// Have Promotions under Sales
// Have Products under stock
// Appointments to be under customers.
