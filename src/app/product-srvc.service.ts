import { Injectable } from '@angular/core';
import { product } from './Model/Iprod';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { user } from './Model/IUser';
import { Options } from 'selenium-webdriver';
import { post } from './Model/post';
import { UserRole } from './Model/user';
@Injectable({
  providedIn: 'root'
})
export class ProductSrvcService {

  public prodList: string[] = ['p1', 'p2', 'p3'];
  public porductListData: product[] = [
    {
      prodId: 101,
      prodName: 'Shampoo',
      price: 120,
      quantiyAvl: 10,
      size: 'L',
      discount: 0
    },
    {
      prodId: 102,
      prodName: 'Soap',
      price: 30,
      quantiyAvl: 19,
      size: 'L',
      discount: 0
    },
    {
      prodId: 103,
      prodName: 'Washing powder',
      price: 150,
      quantiyAvl: 14,
      size: 'L',
      discount: 10
    },
    {
      prodId: 104,
      prodName: 'Handwash',
      price: 80,
      quantiyAvl: 20,
      size: 'L',
      discount: 5
    },
    {
      prodId: 105,
      prodName: 'vessel clearning liq',
      price: 60,
      quantiyAvl: 30,
      size: 'L',
      discount: 0
    }
  ]
  constructor(private http: HttpClient) { }


  public converToString(val: number): string {
    return val.toString();
  }

  public getUsers(userId?: string): Observable<any> {
    
    if (userId != "" && userId != undefined) {
      let param = new HttpParams().append('id', userId)
      return this.http.get('https://gorest.co.in/public/v2/users', { observe: 'body', params: param });
    }
    else {
      return this.http.get('https://gorest.co.in/public/v2/users', { observe: 'body' });
    }
  }
  public getUserById(userId: string): Observable<any> {
    
    let param = new HttpParams().append('id', userId)
    return this.http.get('https://gorest.co.in/public/v2/users', { observe: 'body'});


  }

  //add new user
  public addUser(userObj: UserRole): Observable<any> {
   
    let httpBodyData = JSON.stringify(userObj);
    return this.http.post('https://reqres.in/api/users', httpBodyData);

  }

  //add new post
  public addPost(bodyPost: post): Observable<any> {
    const hdr = new HttpHeaders().
      set('Content-type', 'application/json; charset=UTF-8');
    let body = JSON.stringify(bodyPost)

    return this.http.post('https://jsonplaceholder.typicode.com/posts', body, { headers: hdr });
  }


}
