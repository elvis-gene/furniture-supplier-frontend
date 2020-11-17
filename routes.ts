import {Routes} from '@angular/router';
import {StaffComponent} from './src/app/staff/staff.component';
import {StockControlComponent} from './src/app/stockcontrol/stock-control.component';
import {SalesComponent} from './src/app/sales/sales.component';
import {DistributionComponent} from './src/app/distribution/distribution.component';
import {ClienteleComponent} from './src/app/clientele/clientele.component';
import {StaffLoginComponent} from './src/app/login/staff-login/staff-login.component';
import {CreateProductComponent} from './src/app/stockcontrol/products/create-product/create-product.component';
import {StoreComponent} from './src/app/store/store.component';
import {StaffHomepageComponent} from './src/app/staff/staff-homepage/staff-homepage.component';
import {ProductsComponent} from './src/app/stockcontrol/products/products.component';
import {AppointmentsComponent} from './src/app/clientele/appointments/appointments.component';
import {PromotionsComponent} from './src/app/sales/promotions/promotions.component';
import {JobsComponent} from './src/app/staff/jobs/jobs.component';
import {ProductThumbnailComponent} from './src/app/stockcontrol/products/product-thumbnail/product-thumbnail.component';
import {ProductDetailsComponent} from './src/app/stockcontrol/products/product-details/product-details.component';

export let appRoutes: Routes = [
  {path: 'staff', component: StaffHomepageComponent},
  {path: 'store', component: StoreComponent},
  {path: 'staff/stock', component: StockControlComponent},
  {path: 'staff/sales', component: SalesComponent},
  {path: 'staff/sales/promotions', component: PromotionsComponent},
  {path: 'staff/deliveries', component: DistributionComponent},
  {path: 'staff/customers', component: ClienteleComponent},
  {path: 'staff-login', component: StaffLoginComponent},
  {path: 'staff/stock/products/new', component: CreateProductComponent},
  {path: 'staff/employees', component: StaffComponent},
  {path: 'staff/customers/appointments', component: AppointmentsComponent},
  {path: 'staff/jobs', component: JobsComponent},
  {path: 'staff/stock/products', component: ProductsComponent},
  {path: 'staff/stock/products/:id', component: ProductDetailsComponent},

  {path: '', redirectTo: '/store', pathMatch: 'full'}
];

// Suggestions: ctrl + space
// Add detail components

// Have Promotions under Sales
// Have Products under stock
// Appointments to be under customers.
