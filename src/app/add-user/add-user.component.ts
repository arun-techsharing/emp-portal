import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductSrvcService } from '../product-srvc.service';
import { post } from '../Model/post';
import { user } from '../Model/IUser';
import { UserRole } from '../Model/user';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  userForm = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    jobName: new FormControl('', [Validators.required]),
  })
  constructor(private prodSvc: ProductSrvcService, private tostrSrv:ToastrService) { }

  ngOnInit(): void {

    let postData: post = {
      title: 'Learning Angular',
      body: 'Integration with Backend',
      userId: 3
    }
    this.prodSvc.addPost(postData).subscribe(
      (res) => {
        console.log(res);
      })

  }

  addUser() {
    console.log(this.userForm.value)
    let userData:UserRole = {
      job:this.userForm['controls']['jobName'].value,
      name:this.userForm['controls']['userName'].value,
    }
    this.prodSvc.addUser(userData).subscribe(
      (resp) => {
        console.log(resp);
        this.tostrSrv.success('User added successfully')

      }
    )
  }


  addPost() {

  }

}
