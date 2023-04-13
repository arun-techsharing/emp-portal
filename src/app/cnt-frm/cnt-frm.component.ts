import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cnt-frm',
  templateUrl: './cnt-frm.component.html',
  styleUrls: ['./cnt-frm.component.css']
})
export class CntFrmComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  submitQuery(frmVal:any){
    console.log(frmVal.value);
  }
}
