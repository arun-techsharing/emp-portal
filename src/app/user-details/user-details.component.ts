import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { user } from '../Model/IUser';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  public userDtl:user;
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
  constructor(private actRou:ActivatedRoute) { }

  ngOnInit(): void {

    this.actRou.params.subscribe(val =>{
      console.log(val.usrId);
      this.userCollection.filter(usr => usr.userId = val.usrId)
      console.log(this.userCollection.filter(usr => usr.userId = val.usrId))
      this.userDtl = this.userCollection[0];
      console.log(this.userDtl)
    })

  }

}
