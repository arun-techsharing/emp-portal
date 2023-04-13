import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { user } from '../Model/IUser'
import { ProductSrvcService } from '../product-srvc.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  public userListBck: any[] = [];


  searchForm = new FormGroup({
    userId: new FormControl(),
  })

  //string array
  public userColection: string[] = ['Raja', 'Mahesh', 'Priya', 'Prem', 'Lakshni', 'sarava'];

  public prodList: product[] = [
    {
      pId: 100,
      prodNAme: 'Grocery'
    },
    {
      pId: 200,
      prodNAme: 'Fruits'
    }
  ]

  // array of object and object type is a user type (which will used from the Interface)
  public userCollection: user[] = [
    {
      userId: 101,
      firstName: 'Raja',
      lastName: 'Kumar',
      address: 'OMR',
      age: 28,
      cntNbr: 24234332
    },
    {
      userId: 102,
      firstName: 'Mahesh',
      lastName: 'Kumar',
      address: 'OMR',
      age: 28,
      cntNbr: 24234332
    },
    {
      userId: 103,
      firstName: 'Raja',
      lastName: 'Kumar',
      address: 'OMR',
      age: 28,
      cntNbr: 24234332
    },
    {
      userId: 104,
      firstName: 'Raja',
      lastName: 'Kumar',
      address: 'OMR',
      age: 28,
      cntNbr: 24234332
    }

  ]

  //array of an object -> object is of type user
  public userLst: any = [
    {
      userId: 101,
      name: 'Raja',
      updatedDt: new Date(),
      completedPer: '0.85'
    },
    {
      userId: 102,
      name: 'Mahesh',
      updatedDt: new Date(),
      completedPer: '0.75'
    },
    {
      userId: 103,
      name: 'Priya',
      updatedDt: new Date(),
      completedPer: '1.0'
    },
    {
      userId: 104,
      name: 'Prem',
      updatedDt: new Date(),
      completedPer: '0.85'
    },
    {
      userId: 105,
      name: 'Lakshmi',
      updatedDt: new Date(),
      completedPer: '0.92'
    }
  ]
  constructor(private rou: Router, private prdSvc: ProductSrvcService) { }

  ngOnInit(): void {

    console.log('before calling backend method');
    this.prdSvc.getUsers().subscribe(
      (resp) => {   //next method

        console.log('response received from backend')
        console.log(resp);
        this.userListBck = resp;
      },
      ()=>{
        console.log('subscrition completed successfully')
      }

    )
    console.log('After calling backend method');

  }

  public getProdcutById(pId: number) {
    let pd = pId;

  }

  public redrt() {

    this.rou.navigateByUrl('/registerUser');

  }

  public searchUser(){
    let searchUserID = this.searchForm['controls']['userId'].value;
    console.log(searchUserID);
    this.prdSvc.getUserById(searchUserID).subscribe(
      (resp) => {   //next method

        console.log('response received from backend for specific User Id')
        console.log(resp);
        this.userListBck = resp;
      },
      (error)=>{
        console.log(error);
        window.alert('Server response failed')
      }
    )
  }

}


interface product {
  pId: number,
  prodNAme: string
}

interface cntry {
  cntryId: number,
  cntryVal: string
}