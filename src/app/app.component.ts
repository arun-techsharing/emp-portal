import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'empMgntPortal';

  ngOnInit(){

    localStorage.setItem('usernm','raja');
    localStorage.setItem('userRole','admin');
  }

  sgnOut(){
    localStorage.removeItem('userRole')
    localStorage.clear();
  }
}
