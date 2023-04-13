import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';    

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { home } from './home/home.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { UserListComponent } from './user-list/user-list.component';
import { PageNotFountComponent } from './page-not-fount/page-not-fount.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { DataTableComponent } from './data-table/data-table.component';
import { CntFrmComponent } from './cnt-frm/cnt-frm.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddProductComponent } from './add-product/add-product.component';
import { ProdListComponent } from './prod-list/prod-list.component';
import { EdiProdComponent } from './edi-prod/edi-prod.component';
import { AuthRouteGuard } from './auth-route.guard';
import { ProductSrvcService } from './product-srvc.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AddUserComponent } from './add-user/add-user.component'
import { SrvcInterceptorInterceptor } from './srvc-interceptor.interceptor';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    home,
    RegisterationComponent,
    UserListComponent,
    PageNotFountComponent,
    UserDetailsComponent,
    DataTableComponent,
    CntFrmComponent,
    AddProductComponent,
    ProdListComponent,
    EdiProdComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [AuthRouteGuard, ProductSrvcService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SrvcInterceptorInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class app { }
