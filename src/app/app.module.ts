import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

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
import { ProductThumbnailComponent } from './stockcontrol/products/product-thumbnail/product-thumbnail.component';
import { ProductDetailsComponent } from './stockcontrol/products/product-details/product-details.component';
import { UpdateProductComponent } from './stockcontrol/products/update-product/update-product.component';
import { StoreProductThumbnailComponent } from './store/store-product-thumbnail/store-product-thumbnail.component';
import { ReturnProductComponent } from './store/return-product/return-product.component';
import { StoreProductDetailsComponent } from './store/store-product-details/store-product-details.component';
import { ViewCartComponent } from './store/view-cart/view-cart.component';
import { CartProductThumbnailComponent } from './store/cart-product-thumbnail/cart-product-thumbnail.component';
import { SaleThumbnailComponent } from './sales/sale-thumbnail/sale-thumbnail.component';
import { CreateSaleComponent } from './create-sale/create-sale.component';
import { UpdateSaleComponent } from './sales/update-sale/update-sale.component';
import { SaleDetailsComponent } from './sales/sale-details/sale-details.component';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import { NavClientComponent } from './base/nav-client/nav-client.component';
import { SaleProductThumbnailComponent } from './sales/sale-product-thumbnail/sale-product-thumbnail.component';
import {AuthService} from './login/services/auth.service';
import { ReturnsComponent } from './sales/returns/returns.component';
import { CreateCategoryComponent } from './categories/create-category/create-category.component';
import { CategoryDetailsComponent } from './categories/category-details/category-details.component';
import { CategoryThumbnailComponent } from './categories/category-thumbnail/category-thumbnail.component';
import { UpdateCategoryComponent } from './categories/update-category/update-category.component';
import { CategoriesComponent } from './categories/categories.component';

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
    AppointmentsComponent,
    ProductThumbnailComponent,
    ProductDetailsComponent,
    UpdateProductComponent,
    StoreProductThumbnailComponent,
    ReturnProductComponent,
    StoreProductDetailsComponent,
    ViewCartComponent,
    CartProductThumbnailComponent,
    SaleThumbnailComponent,
    CreateSaleComponent,
    UpdateSaleComponent,
    SaleDetailsComponent,
    NavClientComponent,
    SaleProductThumbnailComponent,
    ReturnsComponent,
    CreateCategoryComponent,
    CategoryDetailsComponent,
    CategoryThumbnailComponent,
    UpdateCategoryComponent,
    CategoriesComponent
  ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        FormsModule,
        BrowserAnimationsModule,
        MaterialModule,
        MatSidenavModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatIconModule,
        MatBadgeModule
    ],
  providers: [
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
