import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { AuthRouteGuard } from './auth-route.guard';
import { CntFrmComponent } from './cnt-frm/cnt-frm.component';
import { EdiProdComponent } from './edi-prod/edi-prod.component';
import { home } from './home/home.component';
import { PageNotFountComponent } from './page-not-fount/page-not-fount.component';
import { ProdListComponent } from './prod-list/prod-list.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListComponent } from './user-list/user-list.component';
import { AddUserComponent } from './add-user/add-user.component';

const navList: Routes = [
  {
    path:'home',component:home
  },
  {
    path:'listofpeople',component:UserListComponent
  },
  {
    path:'registerUser/:usrid/:usrNm', component:RegisterationComponent
  },
  {
    path:'user-Register', component:RegisterationComponent
  },
  {
    path:'user-list',component:UserListComponent
  },
  {
    path:'add-user',component:AddUserComponent, 
  },
  {
    path:'user-details/:usrId',component:UserDetailsComponent
  },
  {
    path:'contact-us',component:CntFrmComponent
  },
  {
    path:'add-product',component:AddProductComponent
  },
  {
    path:'products',component:ProdListComponent, canActivate:[AuthRouteGuard]
  },
  {
    path:'edit-product/:pId',component:EdiProdComponent, canActivate:[AuthRouteGuard]
  },
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'**', component:PageNotFountComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(navList)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
