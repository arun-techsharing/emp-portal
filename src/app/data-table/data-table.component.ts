import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  //this Input decorator will allow parent component to pass value using this property (Count)
  @Input() count:number = 0 ;
  @Input() dataCollection:any = [];
  @Output() id:EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  sendID(){

    this.id.emit(10);
  }

  selectedID(userID:number){

    this.id.emit(userID)
  }

}
