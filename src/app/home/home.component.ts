import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class home implements OnInit {
  public name: string = "Raja";
  public title: string = "Data Binding Concepts";
  public imgSrc: string = "../../assets/images/mobilephone.jpg";
  public isValid: boolean = false;
  public cssCls: string = "imgStyle";
  public cntr: number = 0;
  public showHeading:boolean = false;

  public userDetailsList = [
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

  constructor() { }

  ngOnInit(): void {
  }

  public showMyName() {
    debugger;
    this.showHeading = true;
    alert(`my name ia ${this.name}`);
  }
  getCurrentTime(): string {
    return "21-02-2023";
  }

  counterIncrement() {
    this.cntr++;
  }

  getId(usdID){
    console.log(usdID)
  }

}
