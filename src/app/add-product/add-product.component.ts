import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { product } from '../Model/Iprod';
import { disVerification } from './custom-fucntions';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  public productForm = new FormGroup({
    prodName: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z]+$")]),
    price: new FormControl('0', [Validators.required, Validators.maxLength(8)]),
    quantiyAvl: new FormControl('', [Validators.required]),
    size: new FormControl(),
    discount: new FormControl('', [disVerification, Validators.pattern("^[0-9]+$")])
  })
  constructor() { }

  ngOnInit(): void {

   

  }

  public AddProduct() {
    console.log(this.productForm.value)
    console.log(this.productForm.controls['prodName'].valid)
    let prod: product = this.productForm.value;
  }
}

// function disVerification(cntrl: AbstractControl): ValidationErrors | null {

//   let discVal = cntrl.value;
//   console.log(discVal)
//   if (discVal > 100) {
//     return { 'disInvalid': false };
//   }
//   else {
//     return null;
//   }

// }
