import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { product } from '../Model/Iprod';
import { ProductSrvcService } from '../product-srvc.service';

@Component({
  selector: 'app-prod-list',
  templateUrl: './prod-list.component.html',
  styleUrls: ['./prod-list.component.css']
})
export class ProdListComponent implements OnInit {
  public productList: product[];
  public usrRol: string = "";
  public prodLst:string[]=[];
  constructor(
    private routing: Router,
    private prdSvc: ProductSrvcService
  ) { }

  ngOnInit(): void {

    this.usrRol = localStorage.getItem('userRole');
    console.log('user role from localstorage', this.usrRol);

    console.log(this.prdSvc.prodList);
    this.prodLst = this.prdSvc.prodList;

    this.productList = this.prdSvc.porductListData;
    
  }

  editProd(prodID) {
    console.log(prodID);
    this.routing.navigateByUrl('/edit-product/' + prodID);
  }

}
