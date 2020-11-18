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
import {ProductDetailsComponent} from './src/app/stockcontrol/products/product-details/product-details.component';
import {UpdateProductComponent} from './src/app/stockcontrol/products/update-product/update-product.component';
import {StoreProductDetailsComponent} from './src/app/store/store-product-details/store-product-details.component';
import {ReturnProductComponent} from './src/app/return-product/return-product.component';

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
  {path: 'staff/stock/products/:id/update', component: UpdateProductComponent},
  {path: 'store/product/:id', component: StoreProductDetailsComponent},
  {path: 'store/return-item', component: ReturnProductComponent},

  {path: '', redirectTo: '/store', pathMatch: 'full'}
];

// Todo:
