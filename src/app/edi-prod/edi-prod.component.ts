import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { disVerification } from '../add-product/custom-fucntions';
import { product } from '../Model/Iprod';
import { ProductSrvcService } from '../product-srvc.service';
@Component({
  selector: 'app-edi-prod',
  templateUrl: './edi-prod.component.html',
  styleUrls: ['./edi-prod.component.css']
})
export class EdiProdComponent implements OnInit {
  public productList: product[];
  public productForm = new FormGroup({
    prodName: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z]+$")]),
    price: new FormControl('', [Validators.required, Validators.maxLength(8)]),
    quantiyAvl: new FormControl('', [Validators.required]),
    size: new FormControl(),
    discount: new FormControl('',[disVerification])
  })
  constructor(private rou: ActivatedRoute, private prdSvc:ProductSrvcService) { }
 
  ngOnInit(): void {

    let userRole = localStorage.getItem('userRole');
    
    console.log('in Edit comp', this.prdSvc.prodList)
    this.prdSvc.prodList.push('p4');
    this.productList = this.prdSvc.porductListData;
    
    this.rou.params.subscribe((val) => {
      // here we have subscribed to the product ID which user has selected in the product list component using routing (ActiatedRoute)
      let prodId = val.pId;

      // in reall time scenario using this product we will be calling an API ex: getProductDetailsByProdID(prodId)
      
      // Now we don't have backend, so we are using static product array list and filter the product based on the prod id selected by the user


      let filterProd = this.productList.filter(prd => prd.prodId == prodId);
      console.log(filterProd);
      if (filterProd.length > 0) {
        this.productForm.setValue({
          prodName: filterProd[0].prodName,
          price: filterProd[0].price,
          quantiyAvl: filterProd[0].quantiyAvl,
          size: filterProd[0].size,
          discount: filterProd[0].discount

        })
      }

    }
    )

    let convertedStr:string = this.prdSvc.converToString(100);
    console.log(convertedStr)
  }

}
